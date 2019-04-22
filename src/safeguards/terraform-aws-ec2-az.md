---
path: "/safeguards/terraform/aws/ec2/allowed-availability-zones"
title: "availability zones"
id: terraform/aws/allowed-ec2-availability-zones
provisioner: terraform
terraform_provider: aws
resource: aws_instance
---

# Availability Zones

## Variables
- `required` (bool, default: `false`)
- `allowed` (array)