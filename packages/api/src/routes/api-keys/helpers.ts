import {
  KmsKeyringNode,
  buildClient,
  CommitmentPolicy,
} from "@aws-crypto/client-node";
import { Resource } from "sst";


const { encrypt, decrypt } = buildClient(
  CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT
);

 const generatorKeyId = Resource.KMS_KEYID.value;
 const keyring = new KmsKeyringNode({ generatorKeyId });

export {encrypt, decrypt, keyring}