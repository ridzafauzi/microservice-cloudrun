

CI/CD pipeline to build and push NodeJS web app using docker and deploy as serverless container in Google Cloud Run with keyless authentication ( utilizing OIDC token and Workload Identity Federation )

1. This pipeline is managed with Github Actions.
2. The web app is based on Node.JS and is built as container using docker.
3. The image is pushed to Google Container Registry via keyless authentication.
4. The keyless authentication is utilizing Github OIDC provider to setup trust with Google Workload Identity Federation.
5. Workload Identity Federation contains pool associated with Github OIDC provider and Service Account associated to this pool has IAM policy mapped to this repository.
6. OIDC token is sent to STS and it is evaluated with Workload Identity Pool.
7. STS returns access token to Github Actions.
8. Github Actions build the image using Docker and push to Container Register using the token provided by STS.
9. After that, the image is deployed to Cloud Run.
