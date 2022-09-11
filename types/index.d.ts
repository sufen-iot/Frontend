// 타입스크립트를 사용하기 위해 타입을 정의합니다.
// 수난 사고가 일어났을 때 받아오는 데이터의 타입을 정의하였습니다.
export interface AccidentList {
  id: string;
  time: Date;
  image: string;
  latitude: number;
  longitude: number;
  status: boolean;
}

export interface Accident {
  history: AccidentList[];
  totalCount: number;
}

// 수난 사고 발생 시 사고 처리 수락 여부에 따라 반환하는 데이터의 타입을 정의하였습니다.
export interface returnAccident {
  id: string;
  status: boolean;
}
