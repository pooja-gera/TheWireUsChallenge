class TrieNode {
    constructor(char) {
      this.char = char; // to store the current character
      this.validWord = false; // if the current character is at the end of a whole word
      this.parent = null; // parent of the current node
      this.children = []; // children nodes
    }
  }

  class Trie {
    constructor() {
      this.root = new TrieNode('');
    }

    add(word) {
      let current = this.root; // the searching pointer starts at the root
      for (let i = 0; i < word.length; i += 1) {
        const ch = word[i];
        let found = false;
        // iterating through the children nodes of the current node
        for (let j = current.children.length; j--; ) {
          const child = current.children[j];
          if (child.char === ch) {
            found = true;
            // if we find a matching character, move the pointer to the matching child
            current = child;
            break;
          }
        }

        // if we can't find the character in the child node list, create a new node, and add it into the list
        if (!found) {
          current.children.push(new TrieNode(ch));
          const newNode = current.children[current.children.length - 1];
          newNode.parent = current;
          // move the pointer to the newly created node
          current = newNode;
        }
      }
      // after the above operations, the pointer should be at the end of a word
      current.validWord = true;
    }

    search(input) {
        // to match the input with the output exactly
        const inputMirror = [];
        let current = this.root;
        for (let i = 0; i < input.length; i += 1) {
          const ch = input.charAt(i);
          let found = false;
          for (let j = current.children.length; j--;) {
            const child = current.children[j];
            if (child.char.toLowerCase() === ch.toLowerCase()) {
              found = true;
              current = child;
              inputMirror.push(child.char);
              break;
            }
          }
          if (!found) {
            return [];
          }
        }

        // after the above operations, the pointer should be at the node corresponding
        // to the last input character
        const match = []; // to store all matching words
        const tracker = []; // keep track of found character nodes
        function traverse(node) {
          tracker.push(node.char);
          if (node.validWord) {
            const temp = inputMirror.slice(0, input.length - 1);
            temp.push(...tracker);
            match.push(temp.join(''));
          }

          // recursively call all children nodes
          node.children.forEach(traverse);

          // to make the tracker empty (so as to match the correct string)
          tracker.pop();
        }
        traverse(current);
        return match;
      }
}

var trie = new Trie();

trie.add('Javascript');
trie.add('Java');
trie.add('Python');

match = trie.search('Javascript');
console.log(match);

noMatch = trie.search('Ruby');
console.log(noMatch);
