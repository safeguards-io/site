---
path: "/safeguards/terraform/aws/ec2/allowed-availability-zones"
title: "Allowed availability zones"
id: terraform/aws/allowed-ec2-availability-zones
provisioner: default/terraform
provider: aws
description: Restrict the allowed availability zones for EC2 instances
source: https://github.com/safeguards-io/safeguards/blob/master/src/safeguards/terraform/aws/allowed-ec2-availability-zones.js
issues: https://github.com/safeguards-io/safeguards/issues/new
---

Restricts the availability zones which can be used by the EC2 Instances. Setting the availability
zone on an EC2 instance is optional; onlyl instances with the `availability_zone` attribute on
`aws_instance` will be checked.

## Variables
- `allowed` (list) - The list of allowed availability zones

## Example

This example requires that all EC2 instance are provisioned in us-east-1a... us-east-1c.

```
provisioners:
- source: default/terraform

policies:
  must-use-us-east-1-azs:
    safeguard: terraform/aws/allowed-ec2-availability-zones
    settings:
      allowed:
      - us-east-1a
      - us-east-1b
      - us-east-1c
```
