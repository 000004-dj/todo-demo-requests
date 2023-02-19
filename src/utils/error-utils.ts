import { setError, SetErrorType, setLoadStatus, SetLoadStatusType } from '../app/app-reducer'
import { Dispatch } from 'redux'
import { ResponseType } from '../api/todolists-api'

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setError(data.messages[0]))
    } else {
        dispatch(setError('Some error occurred'))
    }
    dispatch(setLoadStatus('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setError(error.message))
    dispatch(setLoadStatus('failed'))
}



type ErrorUtilsDispatchType = Dispatch<SetErrorType | SetLoadStatusType>
