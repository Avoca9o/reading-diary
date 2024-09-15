from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello, World!"}


@app.get("/users")
def get_users():
    return ["dima", "matvey", "steve"]

# import os
#
# from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import FileResponse
#
# app = FastAPI()
#
# @app.get("/")
# async def root():
#     return {"message": "Hello World"}
#
#
# @app.get("/hello/{name}")
# async def say_hello(name: str):
#     print('got {}'.format(name))
#     return {"message": f"Hello, {name}"}
#
# @app.get("/ls/")
# async def ls():
#     output = list()
#     for root, dirs, files in os.walk("files"):
#         for filename in files:
#             output.append(filename)
#     if len(output) == 0:
#         return {"message": "database is empty"}
#     return {"files": output}
#
# @app.get("/download/{file}")
# async def download(file: str):
#     location = os.getcwd() + "/files/" + file
#     if os.path.exists(location):
#         return FileResponse(path=location, media_type='application/octet-stream', filename=file)
#     return {"message": "file not found"}
#
# @app.post("/upload/")
# async def upload(file: UploadFile = File(...)):
#     try:
#         for root, dirs, files in os.walk("files"):
#             for filename in files:
#                 if filename == file.filename:
#                     return {"message": "file is already in database"}
#         content = file.file.read()
#         with open("files/" + file.filename, 'wb') as f:
#             f.write(content)
#     except Exception:
#         return {"message": "cannot upload file"}
#     finally:
#         file.file.close()
#     return {"statusCode": "OK"}