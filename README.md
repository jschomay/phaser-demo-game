PHASER GAME DEMO
================
The commits in this repo go step by step through the process of building a polished space shooter game with the [Phaser.js](http://phaser.io) HTML5 game framework.

![screenshot](https://31.media.tumblr.com/f75844fe624ff1126b14e03b33c4cc8a/tumblr_inline_nfm51gCKmu1sbxzuw.png)

You can follow through a written tutorial of this game with more commentary at [on my blog](http://jschomay.tumblr.com/post/103568304133/html5-space-shooter-game-tutorial-with-phaser-js).


Credits
-------
- Many of the assets and the base for the game come from the [invaders phaser examples](http://examples.phaser.io/_site/view_full.html?d=games&f=invaders.js&t=invaders).  
- Cool enemy ship graphics from http://opengameart.org/users/skorpio
- Nice enemy lasers from http://opengameart.org/users/bonsaiheldin
- Font face is http://www.fontspace.com/nimavisual/trench


Very brief introduction to game dev concepts
--------------------------------------------
Games are all about interactivity.  A game is an experience that unfolds over time through a collaboration between the game creator(s) and the player.

### 3 facets to game design

  1.  Production values - graphics, sounds, special effects, polish
  2.  Content - story, theme, concept, characters, artwork
  3.  Gameplay - mechanics, challenge, pacing, fun, controls, "feel"

### 4 basic parts of game dev

  1.  Game loop - means to change and display state over time (usually for animation (at 60fps) but could be turn based) 
  2.  Input - get input from the player (otherwise it is a simulation, not a game)
  3.  Update - change the game state based on internal logic and values and responding to player input
  4.  Render - redraw the visual representation of the game state at that time


Resources
---------
#### Phaser:
- Examples - http://examples.phaser.io/
- API documentation - http://docs.phaser.io/
- Starting templates - https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates
- Forum - http://www.html5gamedevs.com/forum/14-phaser/
- Interactive mechanics examples - http://gamemechanicexplorer.com/
- Tons of online tutorials - http://www.lessmilk.com/phaser-tutorial/

#### Game assets:
- Sound effects (sfx) generator - http://www.superflashbros.net/as3sfxr/
- Custom bitmap font generator - http://kvazars.com/littera/
- Free art and sound database - http://opengameart.org
- Links to other more assets - http://letsmakegames.org/resources/art-assets-for-game-developers/
- Assets on redit - http://www.reddit.com/r/GameAssets


Additional topics not covered
-----------------------------
- Best practices for more maintainable code and smaller files
  - Modular development (commonJS, etc)
  - Custom classes inheriting from phaser classes
  - Build tools (browserify, gulp, etc)
  - yoaman for scaffolding
- Scaling modes
- Optimization / profiling / debugging / testing
- Mobile
- Wrapping for native (CocoonJS, Cordova/PhoneGap)
- Communicating with server / multiplayer
- Tilemaps and other game types
- Marketing / distribution / monetization / 3rd party APIs



