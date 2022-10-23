
export interface DeaLink {
    key: number | "Start", from: number, to: number, text: string
}

export interface DeaNode {
    id: number, text: string, figure?: string
}

export interface DeaArray {
    nodes: DeaNode[],
    links: DeaLink[]
}

export class WordGenerator {

    generateWordRekursive(dea: DeaArray, word: string, currentNode: DeaNode, index: number): string | null {
        if (index > 1000) {
            return null;
        }
        // If (Teste ob Node Enpunkt ist)
        if (currentNode.figure === "Ring" && Math.random() > 0.6) {
            return word;
        }
        //Alle ausgehenden Links dieses Notes
        const outgoingLinks = dea.links.filter(link => link.from === currentNode!.id);
        //Anzahl der Links
        //Random ein Link auswählen
        const randomLinkNumber = Math.floor(Math.random() * outgoingLinks.length);
        const nextlinkElement = outgoingLinks[randomLinkNumber];
        const nextNodeElement = dea.nodes.find(node => node.id === nextlinkElement!.to);

        const LinkText = outgoingLinks[randomLinkNumber].text.split(",");

        //Prüfe ob mehre Zeichen vorhanden sind(,)
        if (LinkText.length > 1) {
            const randomLinkText = Math.floor(Math.random() * LinkText.length);
            //Text des Links in das Wort anhängen
            word += LinkText[randomLinkText];
        } else {
            //Text des Links in das Wort anhängen
            word += LinkText[0];
        }

        //Schaue worauf der Link zeigt(to)
        return this.generateWordRekursive(dea, word, nextNodeElement!, index + 1)
    }


    generateWord(dea: DeaArray): string | null {
        //Suche den Link mit "Start"
        const word = "";
        const currentStartLink = dea.links.find(link => link.key === "Start");
        //Gehe durch den Array und suche den Node auf den der Start Link zeigt 
        const currentNode = dea.nodes.find(node => node.id === currentStartLink!.to);
        return this.generateWordRekursive(dea, word, currentNode!, 0)
    };

    generateWords(dea: DeaArray): string[] {
        const result: string[] = [];
        for (let i = 0; i < 1000; i++) {
            const word = this.generateWord(dea);
            if (word !== null) {
                result.push(word)
            }
        }
        return result;
    }

     generateRandomWord(arr) {
         const length = Math.floor(Math.random() * 25);
         return Array
         .from({ length },() => arr[Math.floor(Math.random() * arr.length)])
         .join("");
}             
    

      generateRandomWords(arr): string[] {
        const result: string[] = [];
        for (let i = 0; i < 1000; i++) {
            const word = this.generateRandomWord(arr);
            if (word !== null) {
                result.push(word)
            }
        }
        return result;
    }

}

