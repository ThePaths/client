import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from '../utils';
import { API_BASE_URL } from '../../config';
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// export const setPaths = (id) => (dispatch, getState) => {
//     fetch(`${API_BASE_URL}/userpaths`, {
//         method: 'POST',
//         headers: {
//             // Provide our auth token as credentials
//             // 'Content-Type': 'application/json',
//             Authorization: `Bearer ${authToken}`
//         },
//         body: JSON.stringify({ pathId })
//     })
//     .then(res => res.json())
// }
