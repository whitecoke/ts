# ts
타입스크립트 학습을 위한 repo

# typescript for debug
## 기본 설치 및 세팅
    npm i -g typescript
    npm init -y
    tsc -init

## tsconfig.json 수정
    {
        "compilerOptions":{
            "target": "ES2019",
            "sourceMap": true,
            "rootDir": "./"
        }
    }

## app.ts 생성 및 작성
    //app.ts
    function add(a: number, b: number): number {
        return a + b;
    }
    async function main(){
        console.log(add(3, 5));
    }
    main();

## launch.json 생성 (Ctrl + Shift + D) .vscode폴더에 추가
    lauch.json 파일 만들기 선택
    그러면 .vscode 폴더에 launch.json 파일이 생성된다. launch.json 내용 중 다음 항목을 수정.

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "pwa-node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${workspaceFolder}\\app.ts",
                "outFiles": [
                    "${workspaceFolder}/**/*.js"
                ],
                "preLaunchTask": "tsc: build - tsconfig.json"
            }
        ]
    }

## tasks.json 생성 (Ctrl + Shift + B) .vscode 폴더에 추가
    {
        "version": "2.0.0",
        "tasks": [
        {
            "type": "typescript",
            "tsconfig": "tsconfig.json",
            "problemMatcher": ["$tsc"],
            "group": {
            "kind": "build",
            "isDefault": true
            },
            "label": "tsc: build - tsconfig.json"
        }
        ]
    }

## app.ts에 브레이크 포인트 걸고 F5 gogo

# Typescript Jest를 이용한 테스팅 환경 구성
## https://jforj.tistory.com/252