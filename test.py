import os
import requests

# 1. 'tt' 폴더 만들기
folder_name = 'tt1'
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

# 2. a.txt 파일 읽기
with open('a.txt', 'r') as file:
    lines = file.readlines()

# 3. 각 줄의 URL을 추출하고 파일로 저장
for line in lines:
    try:
        # 줄에서 이미지 URL 추출
        parts = line.split(": ")
        if len(parts) == 2:
            image_name = parts[0].strip()  # 이미지 이름 추출 (A, B, C 등)
            image_url = parts[1].strip()   # URL 추출
            
            # 이미지 다운로드
            response = requests.get(image_url)
            if response.status_code == 200:
                # 이미지 저장
                with open(os.path.join(folder_name, f'{image_name}.jpg'), 'wb') as f:
                    f.write(response.content)
                print(f'{image_name}.jpg 다운로드 완료')
            else:
                print(f'{image_name}.jpg 다운로드 실패 (상태 코드: {response.status_code})')
        else:
            print(f"잘못된 형식: {line}")
    except Exception as e:
        print(f"오류 발생: {e}")
