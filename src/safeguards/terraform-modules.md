---
path: "/safeguards/terraform/modules"
title: "Terraform allowed modules"
id: terraform/modules
provisioner: default/terraform
provider: terraform
description: Restrict the Terraform modules sources which can be used for provisioning
source: https://github.com/safeguards-io/safeguards/blob/master/src/safeguards/terraform/allowed-modules.js
issues: https://github.com/safeguards-io/safeguards/issues/new
---

This safeguard will review all modules to ensure they are loaded from trusted sources.

It checks the `source` attribue in all the `stanza` fields against the list of configured allowed
module sources. This safeguard only checks the sources which use the [public module registry](https://registry.terraform.io/)
or the prviate module registry in Terraform Enterprise. Modules which are loaded from local files
(e.g. `../modules/`) will be ignored. 


## Settings

- `allowed` (required) - A list of module sources which are allowed (e.g. `hashicorp/vault/azurerm`).


## Example


```yaml
- name: Onyl use modules created by Hashicorp
  safeguard: terraform/allowed-modules
  settings:
    allowed:
      - hashicorp/nomad/aws
      - hashicorp/consul/aws
      - hashicorp/vault/aws
```