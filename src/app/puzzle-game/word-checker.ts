import { DeaArray, DeaNode } from "./word-generator";

export class WordChecker {

    checkBeginning(dea: DeaArray, word: string): {value: boolean, index: number} {
        const currentStartLink = dea.links.find(link => link.key === "Start");
        const currentNode = dea.nodes.find(node => node.id === currentStartLink!.to);
        //console.log("Beginn:",word)
        return this.checkWordRekursive(dea, word, currentNode!, 0);
    }

    checkWordRekursive(dea: DeaArray, word: string, currentNode: DeaNode, index: number): {value: boolean, index: number} {
        console.log(word, index)
        if (word === "") {
            console.log(currentNode);
            if (currentNode!.figure === "Ring") {
                return {value: true, index};
            } else {
                return {value: false, index};
            }
        }

        const outgoingLinks = dea.links.filter(link => link.from === currentNode!.id);
        const foundLinks = outgoingLinks.filter(link => link?.text?.includes(word[0]));
        console.log("foundLinkSLänge",foundLinks.length);
        
        if(foundLinks.length > 1){
            throw new Error("ausgehende Kanten müssen eindeutig definiert sein!");
        }

        const foundLink = foundLinks[0];

        console.log("Outlinks",outgoingLinks);
        console.log("foundlink",foundLink);

        if (foundLink && foundLink!.text?.length > 0) {
            word = word.substring(1);
            const nextNodeElement = dea.nodes.find(node => node.id === foundLink!.to)
            return this.checkWordRekursive(dea, word, nextNodeElement!, index + 1);
        } else {
            return {value: false, index};
        }
    }
}