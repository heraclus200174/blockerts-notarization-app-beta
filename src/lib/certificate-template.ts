import { JWK } from "jose";

export function generateCertificateTemplate(
    id: string,
    issuerData: any,
    jwt: any,
    recipientData: any,
    transcript: any,
    publicKey: string
) {
    return {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://w3id.org/blockcerts/v3"
        ],
        "id": `urn:uuid:${id}`,
        "type": [
            "VerifiableCredential",
            "BlockcertsCredential"
        ],
        "issuer": issuerData,
        "issuanceDate": new Date().toISOString(),
        "nonce": "",
        "credentialSubject": {
            "id": jwt,
            "name": "Julien Fraichot",
            "email": "julien.fraichot@hyland.com",
            "publicKey": "ecdsa-koblitz-pubkey:0x3c102A4b4887BDe82D63f26b79dde0756DEE16B9",
            "claim": {
                "name": "Master of Puppets",
                "description": "Awarded to those who rock"
            }
        },
        "display": {
            "contentMediaType": "text/html",
            "content": "<html><body><h1>Some content</h1></body></html>"
        },
        // "proof": {
        //     "type": "MerkleProof2019",
        //     "created": "",
        //     "proofValue": "",
        //     "proofPurpose": "assertionMethod",
        //     "verificationMethod": {
        //         "id": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json#secp256k1-verification-public-key",
        //         "type": "JsonWebKey2020",
        //         "controller": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json",
        //         "publicKeyJwk": {
        //             "kty": "EC",
        //             "crv": "secp256k1",
        //             "x": "sbCL28pBble_1jmEGwRUWYnYC3VIqvwIDOlVC3mPcu8",
        //             "y": "NN9vP6QHRku2B1G-iqDDumDD_LZ6yE4iI30FFVc5FRo"
        //         }
        //     }
        // }
    }
}


export function generateIssuerProfile(ethereumAddress: string, publicKeyId: string | null, publicJWK: JWK, createdDate: string) {
    return {
        "@context": [
            "https://w3id.org/openbadges/v2",
            "https://w3id.org/blockcerts/v3"
        ],
        "id": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json",
        "type": "Profile",
        "name": "High School",
        "url": "https://www.blockcerts.org",
        "email": "julian.santiago0521@gmail.com",
        "publicKey": [
            {
                "id": `ecdsa-koblitz-pubkey:${ethereumAddress}`,
                "created": createdDate
            }
        ],
        "verificationMethod": [
            {
                "id": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json#secp256k1-verification-public-key",
                "type": "JsonWebKey2020",
                "controller": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json",
                "publicKeyJwk": publicJWK
            }
        ],
        "assertionMethod": [
            "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/profile.json#secp256k1-verification-public-key"
        ],
        "revocationList": "https://raw.githubusercontent.com/admiral9200/certificates-test/main/certificates/revocation-list-blockcerts.json",

        "image": "data:image/png;base64,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"
    }
}