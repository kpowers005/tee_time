#code recieved from hackmd 'Using S3 for image upload with Flask'
import boto3
import os
import uuid
import botocore

ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}
BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"

s3 = boto3.client(
  "s3",
  aws_access_key_id=os.environ.get("S3_KEY"),
  aws_secret_access_key=os.environ.get("S3_SECRET")
)


def allowed_files(filename):
  return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def unique_filename(filename):
  ext = filename.rsplit('.', 1)[1].lower()
  unique_filename = uuid.uuid4().hex
  return f'{unique_filename}.{ext}'


def upload_to_s3(file, axs='public-read'):
  try:
    s3.upload_fileobj(
      file,
      BUCKET_NAME,
      file.filename,
      ExtraArgs={
        "ACL":axs,
        "ContentType":file.content_type
      }
    )
  except Exception as e:
    return {"errors": str(e)}

  return {"url": f"{S3_LOCATION}{file.filename}"}
