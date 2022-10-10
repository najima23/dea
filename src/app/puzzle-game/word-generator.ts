import { link } from "fs";

export interface DeaArray {
    nodes: {id: number, text: string, figure: string}[],
    links: {key: number | "Start", from: number, to: number, text: string}[]
}

export class wordGenerator {
    
    generateWord(dea: DeaArray): string{
        let word = "";
        const startLink = dea.links.find(link => link.key === "Start");
        let currentNode = dea.nodes.find(node => node.id === startLink!.to);
        //
        let outgoingLinks = dea.links.filter(link => link.from === currentNode!.id);

        let randomLinkNumber = Math.floor(Math.random() * outgoingLinks.length);
        
        const linkElements = outgoingLinks[randomLinkNumber].text.split(",");

        if(linkElements.length > 1){
        let randomLinkText = Math.floor(Math.random() * linkElements.length);        
        word += linkElements[randomLinkText];
    } else {
        word += linkElements[0];
    }

    if(Math.floor(Math.random() * 2) === 2) {
    // generateWords
    }else{
// retun word
    }
        return word;
    };


}