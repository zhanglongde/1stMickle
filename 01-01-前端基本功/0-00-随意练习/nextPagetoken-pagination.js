/**
 * Created by JUEXINPC-008 on 2017/3/16.
 */
import * as types from '../types'
import {showDbThreadsByLabelPage} from '../dexie'

// init state
const state = {
    nextPageToken: '',
    lastPageToken: '',
    curNextPageToken: '',
    nextPageTokens: [], // 空字符串为最后一页
    singleThreadNum: 30,
    pagination: 1, // 页码
    isLastPage: false,
    isNextPage: false
}

function isSyncEnd () {
    return false
}

// getters
const getters = {
    nextPageTokens: state => state.nextPageTokens,
    nextPageToken: state => state.nextPageToken,
    curNextPageToken: state => state.curNextPageToken,
    lastPageToken: state => state.lastPageToken,
    isLastPage: state => {
        if (isSyncEnd()) {
            return state.pagination > 1
        } else {
            return state.nextPageTokens.indexOf(state.curNextPageToken) >= 1
        }
    },
    isNextPage: (state, getters, rootState) => {
        let totalThreadNum = rootState.labels.totalThreadNum
        let totalPageNum = parseInt(totalThreadNum / state.singleThreadNum) + 1
        return state.pagination !== totalPageNum
    },
    pagination: state => state.pagination,
    singleThreadNum: state => state.singleThreadNum,
    startThreadNum: state => {
        return state.pagination && state.singleThreadNum * (state.pagination - 1) + 1
    },
    endThreadNum: (state, getters, rootState) => {
        let totalThreadNum = rootState.labels.totalThreadNum
        let totalPageNum = parseInt(totalThreadNum / state.singleThreadNum) + 1
        if (state.pagination !== totalPageNum) { // 不是倒数第二页
            return state.singleThreadNum * state.pagination
        }
        return state.singleThreadNum * (totalPageNum - 1) + totalThreadNum % state.singleThreadNum
    }
}

// actions
const actions = {
    getNextPage ({commit, state, rootState}, payload) {
        if (isSyncEnd()) {
            commit(types.START_RELOAD)
            commit(types.DB_NEXT_PAGE, {
                selectedLabel: rootState.labels.selectedLabel,
                commit: commit
            })
            // showDbThreadsByLabelPage(rootState.labels.selectedLabel, state.pagination)
        } else {
            let label = rootState.labels.selectedLabel
            let data = {
                labelIds: label.id,
                pageToken: state.curNextPageToken,
                maxResults: state.singleThreadNum,
                message_info: true,
                message_short: false
            }
            commit(types.NEXT_PAGE, data)
            commit(types.START_RELOAD)
        }
    },
    getLastPage ({commit, state, rootState}, payload) {
        if (isSyncEnd()) {
            commit(types.START_RELOAD)
            commit(types.DB_LAST_PAGE, {
                selectedLabel: rootState.labels.selectedLabel,
                commit: commit
            })
            // showDbThreadsByLabelPage(rootState.labels.selectedLabel, state.pagination + 1)
        } else {
            const index = state.nextPageTokens.indexOf(state.curNextPageToken)
            let curNextPageToken = state.curNextPageToken
            if (index < 0) { // 初始化中，或者token错误，没有上一页
                return
            } else if (index === 1) { // 当前页为第一页，没有上一页
                curNextPageToken = ''
            } else {
                curNextPageToken = state.nextPageTokens[index - 2]
            }
            let label = rootState.labels.selectedLabel
            let data = {
                labelIds: label.id,
                pageToken: curNextPageToken,
                maxResults: state.singleThreadNum,
                message_info: true,
                message_short: false
            }
            commit(types.LAST_PAGE, data)
            commit(types.START_RELOAD)
        }
    },
    updatePage ({commit, state}, payload) {
        commit(types.UPDATE_PAGE, payload)
    },
    clearPage ({commit, state}, payload) {
        commit(types.CLEAR_PAGE, payload)
    }
}

// mutations
const mutations = {
    [types.NEXT_PAGE] (state, payload) {
        state.lastPageToken = state.nextPageToken
        state.nextPageToken = ''
        state.pagination++
    },
    [types.LAST_PAGE] (state, payload) {
        state.pagination--
    },
    [types.UPDATE_PAGE] (state, nextPageToken) {
        if (nextPageToken) {
            state.curNextPageToken = nextPageToken
            if (!state.nextPageTokens) { // 不合法，还原
                state.nextPageTokens = []
            }
            if (state.nextPageTokens.length === 0) {
                state.nextPageTokens.push(state.curNextPageToken)
                state.pagination = 1
            } else {
                const index = state.nextPageTokens.indexOf(state.curNextPageToken)
                if (index < 0) { // 找不到，被认为新的nextPageToken
                    state.nextPageTokens.push(state.curNextPageToken)
                    // state.pagination ++
                }
            }
        } else { // 没有下一页
            if (state.nextPageTokens.length === 0) { // 第一页
                state.nextPageTokens.push(state.curNextPageToken)
                state.pagination = 1
            } else {
                state.curNextPageToken = nextPageToken
                state.nextPageTokens.push(state.curNextPageToken)
            }
        }
    },
    [types.CLEAR_PAGE] (state, thread) {
        state.nextPageTokens = []
        state.pagination = 1
        state.curNextPageToken = ''
        state.isLastPage = false
        state.isNextPage = false
        state.singleThreadNum = 30
    },
    [types.DB_NEXT_PAGE] (state, payload) {
        state.pagination++
        showDbThreadsByLabelPage(payload.selectedLabel.id, state.pagination)
    },
    [types.DB_LAST_PAGE] (state, payload) {
        state.pagination--
        showDbThreadsByLabelPage(payload.selectedLabel.id, state.pagination)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
