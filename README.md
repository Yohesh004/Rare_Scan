

# Rare Scan 🎨

Rare Scan is an **NFT rarity checker** designed to evaluate various traits such as facial features, hair, body, and background to help NFT collectors assess the rarity of their tokens. Using the **Moralis API**, this tool retrieves NFT data from Ethereum Blockchain collections, providing accurate rarity scores to aid traders in making informed decisions.

## Features

- **NFT Trait Evaluation**: Analyzes traits like background, facial features, and accessories to determine the rarity of NFTs.
- **Moralis API Integration**: Fetches data from Ethereum collections for real-time rarity assessment.
- **User-Friendly Interface**: Simple and intuitive design to display NFT rarity scores.
- **Real-time Data Retrieval**: Instantly calculates rarity for selected NFTs from supported collections.

## Technology Stack

- **React.js**: Frontend framework.
- **TailwindCSS**: For styling the user interface.
- **Moralis API**: Backend for retrieving NFT metadata and traits.
- **JavaScript (ES6+)**: Core logic for trait calculation and API interaction.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Yohesh004/RareScan.git
   cd RareScan
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **API Configuration**:
   - Sign up at [Moralis](https://moralis.io) and get your API key.
   - Replace the placeholder in the project with your Moralis API key.

4. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available on `http://localhost:3000`.

## Usage

- Enter the NFT collection address and token ID to check the rarity.
- The app will display a rarity score based on the NFT's traits.

## Future Enhancements

- Support for multiple blockchains (e.g., Solana).
- Additional filters for deeper rarity analysis.
- Mobile-friendly UI.

## License

This project is licensed under the MIT License.

---

