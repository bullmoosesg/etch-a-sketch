1. Create a webpage with a 16x16 grid of square divs.
   1. use Flexbox to make the divs appear as a grid
2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
   1. Does this need to be passive?
3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
   1. limit grid size to 100
   2. Also check out prompts.

Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.

https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
