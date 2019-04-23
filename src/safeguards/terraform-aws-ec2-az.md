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

# Availability Zones

## Variables
- `required` (bool, default: `false`)
- `allowed` (array)