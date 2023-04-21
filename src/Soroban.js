var SorobanClient = require("soroban-client");
var server = new SorobanClient.Server("https://rpc-futurenet.stellar.org:443/");

// Issuer
const issuerKeyPair =('SAMKXGAD7TRGGWZZDCYLUT2XABXAGRFGYK4QZE7JWXO3UKT3YB7UOJJO','GD4QPL5LXJSCX7EEGUMT5FLSZ2LYEDJ44UOLZKP5VNFZTP7WJJM26EXO')
//const issuerKeyPair = SorobanClient.Keypair.random();
const issuerSecretKey = 'SAMKXGAD7TRGGWZZDCYLUT2XABXAGRFGYK4QZE7JWXO3UKT3YB7UOJJO'
const issuerPublicKey = 'GD4QPL5LXJSCX7EEGUMT5FLSZ2LYEDJ44UOLZKP5VNFZTP7WJJM26EXO'

// Distributor
const distributorKeyPair =('SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M','GAJZA5M5KK53I5IHFN42FQXOPGJ2JYMJQ36GUJQ73BAQSRF5OK4D4RFS')
//const distributorKeyPair = SorobanClient.Keypair.random();
const distributorSecretKey = 'SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M'
const distributorPublicKey = 'GAJZA5M5KK53I5IHFN42FQXOPGJ2JYMJQ36GUJQ73BAQSRF5OK4D4RFS'


console.log('issuer', issuerSecretKey);
console.log(issuerPublicKey);

console.log('distributor', distributorSecretKey);
console.log(distributorPublicKey);

// Create an object to represent the new asset
var eduCert = new SorobanClient.Asset("eduCert", issuerPublicKey);

console.log(eduCert);

async function main() {

    // Issuer
const issuerKeyPair =('SAMKXGAD7TRGGWZZDCYLUT2XABXAGRFGYK4QZE7JWXO3UKT3YB7UOJJO','GD4QPL5LXJSCX7EEGUMT5FLSZ2LYEDJ44UOLZKP5VNFZTP7WJJM26EXO')
//const issuerKeyPair = SorobanClient.Keypair.random();
const issuerSecretKey = 'SAMKXGAD7TRGGWZZDCYLUT2XABXAGRFGYK4QZE7JWXO3UKT3YB7UOJJO'
const issuerPublicKey = 'GD4QPL5LXJSCX7EEGUMT5FLSZ2LYEDJ44UOLZKP5VNFZTP7WJJM26EXO'

// Distributor
const distributorKeyPair =('SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M','GAJZA5M5KK53I5IHFN42FQXOPGJ2JYMJQ36GUJQ73BAQSRF5OK4D4RFS')
//const distributorKeyPair = SorobanClient.Keypair.random();
const distributorSecretKey = 'SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M'
const distributorPublicKey = 'GAJZA5M5KK53I5IHFN42FQXOPGJ2JYMJQ36GUJQ73BAQSRF5OK4D4RFS'
const distributorKeypair = SorobanClient.Keypair.fromSecret('SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M')



    try {
      const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(
            SorobanClient.Keypair.random().publicKey(),
        )}`,
      );
      const responseJSON = await response.json();
      console.log("SUCCESS! You have a new account :)\n", responseJSON);
    } catch (e) {
      console.error("ERROR!", e);
    }}

    main();
// First, the receiving account must trust the asset
server.getAccount(distributorPublicKey)
 
  .then(function (receiver) {

    const distributorKeypair = SorobanClient.Keypair.fromSecret('SDPDKRAHW3R7SA3NOFCYCDXZDTDTMIJNAZXM4OGI4BRKZYETD4XDZN5M')

    console.log(receiver)
    var transaction = new SorobanClient.TransactionBuilder(receiver, {
      fee: SorobanClient.BASE_FEE,
      networkPassphrase: SorobanClient.Networks.TESTNET,
    })
    .addOperation(SorobanClient.Operation.changeTrust({
      asset: eduCert,
      limit: "1000",
      source: distributorKeyPair
    }))
    .addOperation(SorobanClient.Operation.payment({
        destination: distributorKeypair.publicKey(),
        asset: eduCert,
        amount: '0.000001',
        source: issuerKeyPair
      }))
    .setTimeout(30)
    .build();

    transaction.sign(distributorKeypair);
    return server.submitTransaction(transaction);
  })
  .then(console.log("payment ok"))
  .catch(function (error) {
    console.error("Error in trust transaction!", error);
  }); 