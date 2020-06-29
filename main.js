let coin = {
    state: 0,
    flip: function() {
    this.coin = 'Heads'
    this.coin = 'tails'
    },

    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    } 
};

function display20Flips() {
    coin.toString()
}
function display20Images() {}
