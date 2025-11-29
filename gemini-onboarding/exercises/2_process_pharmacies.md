# 실습 2: 약국 데이터 처리하기

이 실습에서는 Gemini CLI를 사용하여 CSV 파일을 읽고, 데이터를 가공하여 Excel 파일로 만드는 방법을 배웁니다.

## 목표

- `gemini-onboarding/data/pharmacies.csv` 파일을 읽습니다.
- CSV 데이터를 Excel 파일로 변환합니다.
- 변환된 Excel 파일은 `gemini-onboarding/tmp/pharmacies.xlsx` 경로에 저장되어야 합니다.
- Excel 파일의 첫 번째 탭(시트)에는 원본 CSV 데이터 전체가 포함되어야 합니다. 시트 이름은 '원본'으로 지정합니다.
- '지번주소' 컬럼을 기준으로, 서울의 각 '구'별로 데이터를 필터링하여 별도의 탭으로 저장합니다.
- 각 '구'별 탭의 이름은 해당 구의 이름이어야 합니다. (예: '강남구', '종로구')

## 지침

1.  Gemini CLI에게 `gemini-onboarding/data/pharmacies.csv` 파일의 내용을 확인하도록 요청하세요. 특히, '지번주소' 컬럼의 형식을 파악하여 '구' 정보를 어떻게 추출할지 계획하도록 하세요.
2.  Gemini CLI에게 Python의 `pandas` 라이브러리를 사용하여 스크립트를 작성하도록 요청하세요.
3.  스크립트는 다음 기능을 포함해야 합니다:
    - CSV 파일을 pandas DataFrame으로 읽기
    - DataFrame을 사용하여 Excel 파일을 생성하고 '원본' 시트에 모든 데이터 저장
    - '지번주소'에서 '구' 정보를 추출하여 새로운 '구' 컬럼 생성
    - DataFrame에 있는 모든 고유한 '구'의 목록을 가져오기
    - 각 '구'별로 데이터를 필터링하고, 해당 '구'의 이름을 시트 이름으로 하여 Excel 파일에 추가
4.  작성된 Python 스크립트를 `gemini-onboarding/scripts` 디렉토리에 `process_pharmacies.py`로 저장하도록 하세요. (디렉토리가 없다면 생성하도록 요청하세요.)
5.  저장된 스크립트를 실행하여 최종 `pharmacies.xlsx` 파일을 생성하도록 하세요.

## 예상 결과

실습을 완료하면, `gemini-onboarding/tmp` 디렉토리 안에 `pharmacies.xlsx` 파일이 생성되어야 합니다. 이 파일은 '원본' 탭과 서울의 각 구별로 데이터가 정리된 여러 탭을 포함하고 있어야 합니다.

이제 Gemini CLI에게 작업을 지시하여 이 실습을 완료해보세요!
