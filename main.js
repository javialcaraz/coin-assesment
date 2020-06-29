const bodyElement = document.body

let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
    },

    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "heads"
        } else {
            return "tails"
        }
    },

    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        image.width = 65
        if (this.state === 0) {
            image.src = "./images/heads.jpg"
        } else {
            image.src = "./images/tails.jpg"
        }
        return image;
    }
};

function display20Flips() {
    for (let i = 0; i < 20; i += 1) {
        coin.flip()
        bodyElement.append(coin.toString() + ",  ")
    }
}
display20Flips()



function display20Images() {
    for (let i = 0; i < 20; i += 1) {
        coin.flip()
        coin.toHTML()
        bodyElement.append(coin.toHTML())
    }
}
display20Images()