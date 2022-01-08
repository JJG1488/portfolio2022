import { PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS, PROJECT_LIST_FAIL } from '../constants/projectConstants.js';
import axios from 'axios';


export const listProjects = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_LIST_REQUEST })

        const { data, headers } = await axios.get('/api/projects')
        console.log(data, headers)
        headers['permissions-policy'] = null
        console.log(headers['permissions-policy'])

        dispatch({ type: PROJECT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PROJECT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }

}