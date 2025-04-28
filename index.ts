import * as aws from "@pulumi/aws";

const ecr = new aws.ecr.Repository("teste-pulumi", {
  name: "teste-pulumi",
  imageScanningConfiguration: {
    scanOnPush: true,
  },
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true"
  }
});

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;