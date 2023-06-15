import React, { Component } from "react";
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { clearErrors } from "../../actions/errorActions";
import Grid from '@mui/material/Grid';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import Navbar from '../Dashboard/Navbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from "../NavBar";



class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous",

        };
    }


    render() {


        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
        return (

            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={8} md={20}>
                            <NavBar />
                          
                            <div style={{ padding: '10px' }}>
                                 <h1 style={{ fontSize: "2em", textAlign: "center" }}>Some popular terms in Web3/Blockchain:</h1>
                                 <br></br>

                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Blockchain</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A type of distributed ledger that holds transaction data in "blocks" which are cryptographically linked and secured.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Bitcoin</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The first successful implementation of a digital currency using blockchain technology, invented by an anonymous person or group of people under the pseudonym Satoshi Nakamoto.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Ethereum</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A blockchain-based platform that supports smart contracts, enabling more complex financial and logistical operations beyond simple transactions.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stellar</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Stellar makes it possible to create, send, and trade digital representations of all forms of money: dollars, pesos, bitcoin, pretty much anything. It’s designed so all the world’s financial systems can work together on a single network.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Smart Contract</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A self-executing contract with the terms of the agreement directly written into code. They automatically enforce and execute when conditions in the contract are met.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Decentralized Application (DApp)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Applications that run on a decentralized network, rather than being controlled by a single authority or organization.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Decentralized Finance (DeFi)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A sector of blockchain-based applications designed to eliminate traditional financial intermediaries, offering services like lending, borrowing, and trading.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Web3</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Short for "Web 3.0", this term represents the next generation of the internet, one where decentralized blockchain technologies and cryptocurrencies play a vital role.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>NFT</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            NFT stands for "Non-Fungible Token." It is a type of cryptographic token on a blockchain that represents a unique item or piece of content. Unlike cryptocurrencies like Bitcoin or Ethereum which are fungible and can be exchanged on a one-for-one basis, NFTs are unique and can't be exchanged like-for-like.                                           </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Cryptocurrency</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A type of digital or virtual currency that uses cryptography for security. Bitcoin, Ethereum, and Litecoin are examples.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>NFT (Non-fungible token)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content, using blockchain technology.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Mining</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The process of validating and adding new transactions to a blockchain's ledger, often requiring significant computational power.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Wallet</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A digital tool that allows users to interact with a blockchain network. Wallets can hold cryptographic keys that allow a user to send and receive cryptocurrencies.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Gas (in Ethereum)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The fee required to perform a transaction or execute a contract on the Ethereum network.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>DAO (Decentralized Autonomous Organization)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            An organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Proof of Work (PoW)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A consensus algorithm used in blockchain networks where miners compete to solve a complex mathematical problem first. It is used to validate transactions and produce new blocks to the chain.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Proof of Stake (PoS)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            An alternative to PoW, where validators are chosen to create a new block based on the amount of cryptocurrency they hold and are willing to "stake" as collateral.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Layer 2</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Secondary frameworks or protocols built on top of an existing blockchain network to improve its scalability and efficiency.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stablecoin</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A type of cryptocurrency that is designed to maintain a stable value by being pegged to a reserve of assets, often a specific amount of fiat currency like the US dollar.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Token</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A digital representation of a particular asset or utility that resides on top of another blockchain. Tokens can represent any assets that are fungible and tradable.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Interoperability</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The ability for different blockchain networks to communicate and interact with each other.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Sharding</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A scalability solution that involves dividing a blockchain into several smaller, more manageable pieces, or "shards," each capable of processing its own transactions and smart contracts.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Lumens (XLM)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The native cryptocurrency of the Stellar network. Lumens serve as a bridge currency for transactions involving different currencies and are used to pay for transaction fees on the network.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stellar Consensus Protocol (SCP)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The consensus algorithm used by the Stellar network. It provides a way to reach consensus without relying on a closed system to accurately record financial transactions.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Federated Byzantine Agreement (FBA)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The model of consensus employed by the SCP, which requires nodes to only trust a subset of the overall network. This model strikes a balance between decentralization and efficiency.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stellar Development Foundation (SDF)</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The organization responsible for maintaining and overseeing the development of the Stellar network.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Anchors</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Entities within the Stellar network that issue assets and take deposits. They serve as a bridge between existing financial systems and the Stellar network.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stellar Core</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The software that nodes on the Stellar network run to validate transactions and reach consensus.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Path Payment</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A feature of the Stellar network that allows a user to send one type of asset while the receiver gets another type of asset. Stellar automatically converts the asset at the most favorable rate.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Stellar Toml</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A TOML file that Stellar service providers host to allow clients to discover information about their organization. It includes information such as the organization's currency documentation, images, brand color, etc.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Multi-Signature</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A security feature that requires multiple parties to sign a transaction before it can be executed. Stellar supports multi-signature transactions, enhancing the security of the network.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                    
                </Box>
            </div>



        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
})

Glossary = connect(
    mapStateToProps
)(Glossary)

export default Glossary = reduxForm({
    form: "postReduxForm",
    clearErrors,
})(Glossary)