---
path: "/safeguards/terraform/aws/ec2/instance-type"
title: "Restrict instance types"
id: terraform/aws/allowed-ec2-instance-types
provisioner: default/terraform
provider: aws
description: Restrict the AWS EC2 Instance Types
source: https://github.com/safeguards-io/safeguards/blob/master/src/safeguards/terraform/aws/allowed-ec2-instance-types.js
issues: https://github.com/safeguards-io/safeguards/issues/new
---

Restrict the [AWS EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/) which can be provisioned with Terraform by setting the list of allowed Instance Types.

To configure the safeguard you must specify the `allowed` setting which should be a list of the allowed AWS Instance Types (e.g. `c5.large`). This safeguard will identify all [aws_instance](https://www.terraform.io/docs/providers/aws/r/instance.html) resources being created or updated in the Terraform plan and checks the value of the [instance_type](https://www.terraform.io/docs/providers/aws/r/instance.html#instance_type) field is in the list of allowed instance types.

## Settings
- `allowed` (required) - a list of [instance types](https://aws.amazon.com/ec2/instance-types/). 

## Example
This example will require all EC2 instances provisioned with Terraform to use t2.nano, t2.micro, or t2.small.

```
provisioners:
- source: default/terraform

policies:
  only-allow-1-vcpu-burstable:
    safeguard: terraform/aws/allowed-ec2-instance-types
    settings:
      allowed:
      - t2.nano
      - t2.micro
      - t2.small
```
