import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 22},
    {name: 'Castle-8', xp: 22},
    {name: 'Alaric', xp: 21},
    {name: 'Nuk / Reddy', xp: 20},
    {name: 'Horatio ', xp: 19},
    {name: 'Exilian', xp: 16},
    {name: 'Navani', xp: 15},
    {name: 'John', xp: 15},
    {name: 'Drathuul', xp: 15},
    {name: 'Bill', xp: 14},
    {name: 'Aboouck', xp: 13},
    {name: 'Paxton', xp: 11},
    {name: 'Bavon', xp: 11}
  ]
}

function fetchAllSessions() {
  return [
    _constructSession(1, '8/6/2022', 'Tridas 4', ['Alaric', 'Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck'], [
      'met Aboouck the stressed rabbit at the inn',
      'discovered their open tabs bar',
      'discovered the notice board, learned of the missing coffee bottle and the missing blacksmith\'s son',
      'met with the chamberlain',
      'met with Duke Oakfire, learned of the shards, the Empire, Ebonwatch and Wheldrake Fortress',
      'headed north to find the blacksmith\'s son and witness the shards for themselves, after speaking with the blacksmith and the son\'s friends',
      'paid Toll to a group of guards on the way to Wheldrake',
      'visited and examined the portal at Wheldrake Fortress',
      'were ambushed by lizardmen on the way north, who ceased attacking when they figured out the party was not with the duke',
      'found the site of a fight between armored men on horses and lizardmen',
      'spent the night on the beach',
      'approached the bandit camp in the morning, finding many dead bodies, horses, and Ship, the blacksmith\'s son',
      'returned to Ebonwatch with the horses and Ship, being welcomed as heroes',
      'returned Ship, obtained the bounty of 100g and returned to the tavern'
    ]),
    _constructSession(2, '13/7/2022', 'Furdas 1', ['Alaric', 'Sam', 'Castle-8 / Horny-1', 'Exilian', 'Horatio / Fartman ', 'Nuk / Reddy', 'Bill'], [
      'watched as Sarith was gambling with a kid in the inn',
      'watched as Exilian beat Bill the child gambling, then recruited him into the party while Exilian adopted him as his son',
      'decided to investigate the dried-up timber supply and left for Hornwood',
      'found a broken cart on the road and giant footprints leading away from it',
      'found a fishbowl with a goldfish in it; after Bill tried to eat it, had Exilian keep it safe',
      'followed the footprints to a rapid river, then spent a very long time crossing it, walking through it, getting swept away, rescuing eachother',
      'entered the forest across the river, found the giant sleeping, got teleported away as they touched it',
      'ended up in a clearing in a magical forest, had a voice offering them a deal to either return them or have them serve her forever',
      'examined the scout corpses found here, had Horatio light up the clearing, then run to escape the flames',
      'entered the forest, encountered some large mushrooms that erupted into angry gnomes with heavy boots and huge sickles; beat them',
      'reached a pond where a small blue flying figure resided, who told them she was disappointed in them, ask their names then sent them away',
      'found themselves back at the cart with nightfall approaching, decided to go back to town',
      'realized nobody could remember the names of Castle-8, Horatio and Nuk, then thought up new names for them',
      'visited the duke, handed in the scouts\' emblems, then returned to the tavern',
    ]),
    _constructSession(3, '20/7/2022', 'Furdas 2', ['Castle-8 / Horny-1', 'Horatio / Fartman ', 'Nuk / Reddy', 'Bill'], [
      'saw Reddy talking to an interesting gnome',
      'discussed where to go, had Nuk propose Sootwall, but decided to go back to the magical forest first',
      'encountered Aboouck still frantically looking for coffee',
      'headed to Hornwood where they found a bridge to cross and spoke with the locals',
      'agreed to take a cart of lumber back to Ebonwatch',
      'ran into something invisible on the way, then found themselves back in the magical forest',
      'were greeted by the female voice who identified itself as the Blue Lady, who offered them a challenge to face here, which they accepted',
      'headed into the forest, encountered a deadly overgrowth of vines and thorn bushes, which they overcame',
      'encountered the blue lady in a pond deep in the forest, who had them fight more angry gnomes',
      'saw the trees awaken, the blue lady turn Reddy into a sheep, and almost lost Bill to the gnomes',
      'brokered an agreement with the Blue Lady, who besides returning their names, would leave the villagers alone if they would replant trees and leave the sacred groves alone',
      'reported back to the duke, who after verifying their story, rewarded them with the full reward of 1000g'
    ]),
    _constructSession(4, '3/8/2022', 'Furdas 3', ['Alaric', 'Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck', 'Bill'], [
      'examined the notice board, noticing a wanted poster',
      'discussed what to do, agreeing to go to the gnomish observatory to help Nuk now, then go to the mines to help Aboouck next week',
      'left the town west, slowly following the trail up the mountains until they saw Sootwall before them',
      'approached the observatory, to see two manticores snacking on a huge humanoid',
      'engaged the manticores, where Castle-8 was enlarged and body-slammed a manticore to the ground, with Bill and Sam dealing considerable damage',
      'examined the guardhouse and the green crystal within, only to be covered by a dark sphere when Aboouck and Bill lingered',
      'approached the front door to the observatory, read a riddle in Gnomish, and had Castle-8 lose his hand as he attempted to open the door',
      'entered the observatory to be presented with a maze with crushing blocks, spent a long time evaluating this',
      'had Aboouck and later Nuk run through the maze looking for the exit while being chased by crushing blocks, having Nuk find the exit and disable the maze',
      'navigated the maze together and ascended to the next floor, only to find a small tunnel',
      'had Aboouck, Bill and Nuk explore the tunnel, only to awaken some mechanic constructs which quickly fell dormant again, trapping Nuk in a hole in the ground',
      'freed Nuk, crawled through the small tunnel, crossed a few rooms then solved a puzzle regarding a huge statue with an hourglass',
      'were greeted by Observer Whittlefist, who congratulated them and played a game with the involving barrels with items',
      'left with a few magic items, leaving Castle-8, Horatio and Nuk behind to conduct their business here while the rest returned to town'
    ]),
    _constructSession(5, '17/8/2022', 'Furdas 4', ['Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck'], [
      'had a drink in the tavern while Horatio identified Aboouck\'s Amulet',
      'were shown Castle-8\'s new sword-hand and Horatio\'s new cannon which inspired the party',
      'decided to go to Anorak Iron Mine because Aboouck was convinced he could find coffee there',
      'got to the mine without any trouble, meeting Jules Rockbender and the other miners',
      'were explained the situation in the mine and demanded a cup of coffee for Abboouck before going in',
      'cleared the nearby section, where Sam was set upon by hidden amphibians, which the party took out quite easily',
      'descended into the deeper part of the mine, where Castle-8 and Sam had some fun with the head of an amphibian',
      'came upon a whirlpool, with Sam teleporting around to beaches on the other side before enlarging Castle-8 to cross',
      'explored a tunnel and ran into lizardfolk; got on their good side and were informed on the amphibians',
      'explored another tunnel where they ran into some grey mist along with more amphibians and a very large one',
      'slew the ampibians, explored the mist and found an Eversmoking Bottle',
      'crossed the stream once more, reported back to the lizards and were told they would get in touch',
      'reported back to the miners, were rewarded with a coffee bottle and returned to Ebonwatch'
    ]),
    _constructSession(6, '31/8/2022', 'Fifdas 1', ['Sam', 'Castle-8', 'Nuk', 'Aboouck', 'Bill', 'Paxton', 'Bavon'], [
      'were alarmed by some ruckus outside the tavern and witnessed an orc child being roughly handled, before Aboouck got him into the tavern',
      'met with Bavon the 30-year old orc child and Paxton the protector, who joined the party on their quest',
      'met with Sir Dozak the Magnificent who intents to hire them to explore some ancient ruins later',
      'discussed which quest to undertake, with Castle-8 mentioning a beast outside the walls, before settling to head for the swamp to aid an old lady',
      'headed towards the Gleaming Mire, discovered a cottage on a willow tree and met with Granny Moss',
      'decided to help her find a meteorite and locate a temple where the bullywugs worship their god, receiving a twig in the process',
      'headed into the swamp, crossing a deeper river where they encountered a giant crocodile which dragged Bill under, almost ending him, then facing some bullywugs',
      'continued on, located the meteorite shaped like a large metal boat, extracted a capsule of blue liquid, collected some scrap metal, then stayed the night there',
      'encountered a strange light calling for help during the night, but chose to ignored it',
      'continued into the swamp the next day, finding the temple surrounded by a makeshift stone wall',
      'had Aboouck blow two large holes into the wall and advanced through them, meeting the bullywug king',
      'did not obey the king, leading to a confrontation, caught the king in a black sphere then were surprised by a gigantic toad rising out of the pool',
      'dealt with the bullywugs and the giant without too much trouble, then beat the king to a pulp'
    ])
  ]
}

function _constructSession(iId, sOcDate, sIcDate, aCharacters, aHappenings) {
  return {
    'id': iId,
    'ocDate': sOcDate,
    'icDate': sIcDate,
    'characters': aCharacters,
    'happenings': aHappenings
  }
}

export {fetchAllCharacters, fetchAllSessions};