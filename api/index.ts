import axios from 'axios'
// api 를 호출하는 axios 모듈을 호출합니다.
import { Accident, AccidentList, returnAccident } from '~/types'

const getAPI = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
})
// api 를 호출하는 axios 모듈을 생성합니다.
// baseURL 은 .env 파일에 VUE_API_URL 을 설정해두었습니다.
// withCredentials 은 쿠키를 사용하기 위해 true 로 설정합니다.

export async function connectionTest (): Promise<object> {
  const test = await getAPI.get('/hello')
  return test.data
}
// api 테스트 함수 입니다.

// async, await 를 사용하여 비동기 처리를 합니다.
export async function getAccidentList (): Promise<Accident> {
  const accidentList = await getAPI.get('/accident')
  return accidentList.data
}

export async function getAccidentListById (id: AccidentList['id']): Promise<AccidentList> {
  const accidentList = await getAPI.get(`/accident/${id}`)
  return accidentList.data
}

export async function putAccidentList (data: returnAccident) {
  await getAPI.put('/accident', data)
}

// 라즈베리파이의 정보를 받아오기 위한 함수입니다.
export async function getHardware () {
  const res = await getAPI.get('/hardware')
  return res.data.data
}
