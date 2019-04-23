---
path: "/safeguards/terraform/version"
title: "Terraform version"
id: terraform/version
provisioner: default/terraform
provider: terraform
description: Restrict the Terraform versions which can be used for provisioning
source: https://github.com/safeguards-io/safeguards/blob/master/src/safeguards/terraform/version.js
issues: https://github.com/safeguards-io/safeguards/issues/new
---

This safeguard checks the terraform version being used for provisioning. It uses the plan file to
identify the terraform version which was used to generate the plan. 

## Settings

- `range` (required) - A version range as defined by the [node-semver module](https://github.com/npm/node-semver#ranges).


## Example

**.safeguards.yml**

```yaml
provisioners:
- source: default/terraform

policies:
  must-use-version-0.12:
    safeguard: terraform/version
    settings:
      range: ">= 0.12.0-beta2"
```