### im_tdc_api



Deployment
```
./deploy.sh -b im-lambda-w2 -p im -r us-west-2 -d prod
./deploy.sh -b im-lambda-e1 -p im -r us-east-1 -d prod
```

.env contents
```
local_profile=im
AWS_REGION=us-west-2
DB_SECRET_NAME=DEVQA_db_app_reader

```

To run locally
node local.js index

### TDC API details
