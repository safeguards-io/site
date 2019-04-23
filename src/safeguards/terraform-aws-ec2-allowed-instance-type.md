---
path: "/safeguards/terraform/aws/ec2/instance-type"
title: "Restrict instance types"
id: terraform/aws/allowed-ec2-instance-types
provisioner: terraform
provider: aws
description: Restrict the AWS EC2 Instance Types
source: https://github.com/safeguards-io/safeguards/blob/master/src/safeguards/terraform/aws/allowed-ec2-instance-types.js
issues: https://github.com/safeguards-io/safeguards/issues/new
---

# Instance Type

## Variables
- `required` (bool, default: `false`)
- `allowed` (array)