import { DeaArray, DeaNode } from "./word-generator";

export class WordChecker {

    checkBeginning(dea: DeaArray, word: string): boolean {
        console.log("word", word);
        const currentStartLink = dea.links.find(link => link.key === "Start");
        const currentNode = dea.nodes.find(node => node.id === currentStartLink!.to);
        return this.checkWordRekursive(dea, word, currentNode!);
    }

    checkWordRekursive(dea: DeaArray, word: string, currentNode: DeaNode): boolean {
        if (word === "") {
            if (currentNode!.figure === "Ring") {
                return true;
            } else {
                return false
            }
        }

        const outgoingLinks = dea.links.filter(link => link.from === currentNode!.id);
        const foundLink = outgoingLinks.find(link => link?.text?.includes(word[0]));
        if (foundLink && foundLink!.text?.length > 0) {
            word = word.substring(1);
            const nextNodeElement = dea.nodes.find(node => node.id === foundLink!.to)
            return this.checkWordRekursive(dea, word, nextNodeElement!);
        } else {
            return false;
        }
    }
}