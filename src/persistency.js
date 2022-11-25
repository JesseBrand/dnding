import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 26},
    {name: 'Castle-8', xp: 24},
    {name: 'Nuk', xp: 23},
    {name: 'Alaric', xp: 22},
    {name: 'Horatio ', xp: 22},
    {name: 'Drathuul', xp: 18},
    {name: 'Exilian', xp: 17},
    {name: 'Aboouck', xp: 16},
    {name: 'Bill', xp: 15},
    {name: 'John', xp: 15},
    {name: 'Navani', xp: 15},
    {name: 'Bavon', xp: 14},
    {name: 'Enphine', xp: 14},
    {name: 'Paxton', xp: 14},
    {name: 'Freya', xp: 13}
  ]
}

function fetchAllSessions() {
  return [
    _constructSession(1, 'Lay of the Land', '8/6/2022', 'Tridas 4', ['Alaric', 'Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck'], [
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
    ], [
      '100gp'
    ], [
      'Wheldrake became available as a location',
      'The Hungry Coast became available as a location'
    ]),
    _constructSession(2, 'What\'s in a Name?', '13/7/2022', 'Furdas 1', ['Alaric', 'Sam', 'Castle-8 / Horny-1', 'Exilian', 'Horatio / Fartman ', 'Nuk / Reddy', 'Bill'], [
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
    ], [
      'None'
    ], [,
      'Castle-8, Horatio and Nuk lost their names'
    ]),
    _constructSession(3, 'The Blue Lady', '20/7/2022', 'Furdas 2', ['Castle-8 / Horny-1', 'Horatio / Fartman ', 'Nuk / Reddy', 'Bill'], [
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
      'reported back to the Duke, who after verifying their story, rewarded them with the full reward of 1000g'
    ], [
      'A set of heavy Gnome boots',
      '1000g'
    ], [,
      'Castle-8, Horatio and Nuk regained their names',
      'An agreement was struck between Ebonwatch and the Blue Lady',
      'Hornwood Lumbermill became available as a location'
    ]),
    _constructSession(4, 'The Observatory', '3/8/2022', 'Furdas 3', ['Alaric', 'Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck', 'Bill'], [
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
    ], [
      'a Hat of the Gnomish Scholar',
      'a Leather Armor of the Tiny Gnome'
    ], [,
      'Sootwall Observatory became available as a location'
    ]),
    _constructSession(5, 'Lizard Incursion', '17/8/2022', 'Furdas 4', ['Sam', 'Castle-8', 'Horatio', 'Nuk', 'Aboouck'], [
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
    ], [
      'an Eversmoking Bottle',
      'a Bottle of Boundless Coffee'
    ], [
      'Anorak Iron Mine became available as a location'
    ]),
    _constructSession(6, 'Mysteries of the Mire', '31/8/2022', 'Fifdas 1', ['Sam', 'Castle-8', 'Nuk', 'Aboouck', 'Bill', 'Paxton', 'Bavon'], [
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
      'dealt with the bullywugs and the giant without too much trouble, then beat the king to a pulp',
      'returned to Granny, handed over the capsule after quite some delaying, got Aboouck\'s life restored, then returned to Ebonwatch'
    ], [
      'The One True Hat',
      'The One True Fork',
      '300gp, 50sp',
      '3 jade frog statuettes',
      'an empty rod lot lightning bolts'
    ], [
      'Granny Moss\' Cabin became available as a location',
      'A tube with a strange liquid and shape inside were handed over to Granny Moss',
      'The Mysterious Metal Cache became available as a location'
    ]),
    _constructSession(7, 'Giants under the Earth', '28/9/2022', 'Fifdas 2', ['Alaric', 'Sam', 'Horatio', 'Nuk', 'Aboouck', 'Bill', 'Bavon'], [
      'tried out Sam\'s newly brewed beer, which was very good!',
      'discussed on what to do, negotiated about troll heads, then decided to go and aid the lizards in the mine in their struggle against the troglodytes',
      'saw the blacksmith\'s son delivar a newly crafted metal quarterstaff to Sam',
      'headed to Anorak Iron Mine, met Ian outside, then spoke to the other miners inside, who were somewhat grumpy and yearned for coffee',
      'headed into the mine and noticed the wooden platforms around the whirlpool',
      'met with the lizardfolk who were preparing an assault on the troglodytes, who asked them to clear the area first',
      'explored around while Horatio enhanced the party, following a shallow river to a small island in a small lake where Sam was ambushed by a giant lizard, which the party fought and slew',
      'returned to the lizards, but were told to fight an even bigger one',
      'followed another stream where they were ambushed by 2 black oozes which were quickly cut up into a lot more by Alaric and Nuk before being defeated',
      'got their non-magical weapons severely damaged by these creatures, but were quick to switch to either magical means or cheap weapons',
      'followed the stream further to a marble-looking chamber, which turned out to be a giant slime when they entered, sealing the entrance behind them',
      'were severely battered by the chamber while attacking it on all sides and unleashing some powerful magic before the marble crashed down around them, useless',
      'found a magical gemstone in the remains, which was identified as a Ioun Stone and was given to Alaric',
      'returned, only to find the lizardfolk had dragged the dead lizard out towards their lair and were feasting on it',
      'joined the feast, said goodbye to the lizards and returned to Ebonwatch'
    ], [
      'an Ioun Stone of Protection'
    ], [
      'The Lizardfolk expect the party to find a way through the poison gas'
    ]),
    _constructSession(8, 'The Mutant', '19/10/2022', 'Fifdas 3', ['Sam', 'Castle-8', 'Exilian', 'Horatio', 'Drathuul', 'Bavon'], [
      'spent some time in the inn, deciding what to do; noticed Exilian having trouble with his tab and Castle-8 arriving with a huge amount of metal',
      'decided to attempt to apprehend Reo Churner, and asked around town for more information, among which the blacksmith',
      'watched Sam attempt to locate the smith\'s son Ship\'s hammer, only for the spell to not work',
      'left town and headed south towards Arken Fissure, where they encountered an enraged Reo across the chasm',
      'engaged in conversation with Reo, hearing about his beef with the Duke and his warnings about evil to the south-east',
      'attempted to cross the fissure anyway after Reo headed off, with Castle-8 and Bavon falling in',
      'followed the fissure west to find giant webs, where they were ambushed by some trolls and giant spiders',
      'taunted the trolls in the fissure but eventually decided not to engage and head south',
      'followed the road to the Dreadlands, camping in the wastelands along the way',
      'arrived at the Dreadlands and witnessed a hoard of Gnolls, deciding retreating was the better option, and headed back towards the fissure',
      'ran into an enraged Reo Churner that would not let them pass, engaging them in combat',
      'grew more horrified as Reo ingested vial after vial, mutating and growing more arms before their eyes',
      'eventually subdued him and bound him to take him to Ebonwatch',
      'returned to the town late at night, visiting the Duke in the morning and collecting the bounty after turning Reo in'
    ], [
      '50gp'
    ], [
      'Reo Churner was left in the cells of Ebonwatch Keep'
    ]),
    _constructSession(9, 'Manticore Assault', '26/10/2022', 'Fifdas 4', ['Sam', 'Horatio', 'Drathuul', 'Nuk', 'Aboouck', 'Paxton', 'Bavon', 'Enphine'], [
      'met at the inn when Nuk returned from Sootwall with Master Billowgrin and an unknown wizard lady named Enphine, in search of money for her research',
      'understood from Master Billowgrin that Sootwall was under threat from Manticores',
      'decided on aiding the gnomes and prepared to depart but negotiated for a breathing apparatus for use in the mines, while Alaric and Castle-8 signalled they had other business to attend to',
      'travelled to Sootwall with Master Billowgrin who took them inside through a secret magic circle',
      'were explained the situation with the manticores on the cliffside by the gnomes, then were quickly sent on their way, with the promise of magic items waiting for them upon completion',
      'explored the cliffsides and found a way down, Bavon \'climbing\' down by himself while Sam scouted around',
      'were set upon by two manticores, who were easily dispatched',
      'scouted further and found a nesting area, preparing to attack with a few large stones, among other things',
      'assaulted the manticores down a steep cliff, but were surprised to see a huge manticore lording over the pride',
      'had Paxton climb down hasted while Nuk created a storm sphere to cause confusion and Sam pelted the manticores from above',
      'had Horatio and Drathuul fall down a level due to a rope that appeared to not have been tied too well after all',
      'noticed the huge manticore retreat very fast, but Sam catching up with it, slaying it, then saw it rise again just to be killed by an arrow from Bavon',
      'recovered, looted the nest and manticores and their eggs, then heard a large impact with glass breaking, noticing it came from the observatory',
      'hurried back to the observatory to encounter panicked gnomes, quickly sent them upstairs, while Sam took a peak through the hole from the outside',
      'headed upstairs and ran into a huge manticore fesating on some dead gnomes, covered in broken potions',
      'prepared well then attacked the beast, making use of the ballistae scattered around the room',
      'saw Aboouck cause Bavon and Sam to grow in size until Bavon could pick up a ballista by himself and shoot the manticore repeatedly until it went down, but not before it took down Paxton with it',
      'returned to the gnomes for their reward; again picking from several barrels of magic items, then returned to Ebonwatch'
    ], [
      'a Ring of Protection',
      'a Ring of Evasion',
      'a set of Sending Stones',
      'a Teddybear of the Warmage +1'
    ], [
      'The upper floor of Sootwall was left a mess in the manticore\'s wake'
    ]),
    _constructSession(10, 'Quarrelsome Quarry', '23/11/2022', 'Sidas 1', ['Sam', 'Castle-8', 'Drathuul', 'Nuk', 'Aboouck', 'Paxton', 'Enphine', 'Freya'], [
      'noticed a somewhat irritated Florellius watching the drink consumption of patrons closely after hearing Bavon made a mess of things last night and was now in the Duke\'s jail',
      'had Horatio identify several items, sometimes for something in return',
      'were surprised when a fiery lady suddenly burst into the tavern, alarming everyone, introducing herself as Freya, and joining the party',
      'discussed what quest to undertake, with people being in favor of killing trolls until Sam made them a better offer to help clear the stone quarry to the east, which was supposedly infested by some vile creature',
      'left Ebonwatch where Aboouck showed his heavily modified teddybear-wand which he offered to the spellcasters, Nuk taking it',
      'headed to Gamwater Quarry to the east, Nuk attuning with the puppet along the way',
      'reached the quarry and were heeded by a female warrior identifying herself as Essephy, warning the party about a blue dragon making its lair in this quarry; Castle-8 having no interest and continuing to walk down',
      'invited Essephy to join them and entered the quarry, exploring some corridors only to be beset upon by a brilliantly blue dragon named Nivrath',
      'tried to reason with it before it decided to attack the party, using a high-pitched scream which heavily damaged the party and downed Enphine',
      'noticed Essephy had turned into a green dragon herself, but was watching from a distance with Nuk as Nivrath wrecked havoc among the party',
      'had Aboouck blind the dragon after which Castle-8 inflicted some heavy damage, finally getting the dragon to calm down',
      'had the dragons explain about a rift down in the quarry spewing evil abberations, and the two of them actually keeping the villagers safe by keeping them away',
      'agreed to deal with the abberation, but asked for some healing which was granted by turning Enphine and Drathuul into stone for an hour while the rest of the party took a breath, seeing them recovered when turned back to flesh',
      'saw Navrith part stone and unveil a tunnel down, received instructions how to get back up, then descended into the darkness',
      'explored some tunnels and located a rift, which they had Castle-8 investigate until he lost a shortsword when it was pulled in',
      'found a large room with a sphere of darkness at the far end and concluded this must be the rift. Paxton could see a hideous creature with tentacles in the darkness and told the party, who prepared for combat',
      'engaged the creature in the darkness, being targeted by one colored beam after the other while the creature remained hidden',
      'closed the gap as Castle-8, Paxton and Sam rushed into the darkness to engage the creature in melee, while the rest flung spells at it from range',
      'kept damaging the unseen enemy while beams kept striking the party until a red beam annihilated Drathuul and he fell to the ground with a big hole in his chest',
      'finally defeated the creature; after it was vanquished the darkness disappeared and a great black rift was revealed',
      'found a magical stone, quickly investigated the rift, took along Drathuul\'s body and returned to the dragons',
      'were helped back up by the dragons who were very thankful for their effort and expressed their condoleances for Drathuul\'s death; they offered to help his essence, being one of their kin, to return to the world',
      'were granted a reward, left Drathuul\'s body and belongings with Essephy and Nivrath and returned to Ebonwatch, knowing the quarry was open for production once more',
    ], [
      'a green-pink marbled rock',
      'a dragon-blessed glaive'
    ], [
      'Drathuul was annihilated by a shadow beholder',
      'An agreement was struck with the dragons inhabiting Gamwater Quarry',
      'Gamwater Quarry became available as a location'
    ])
  ]
}

function _constructSession(iId, sName, sOcDate, sIcDate, aCharacters, aHappenings, aLoot, aRepercussions) {
  return {
    'id': iId,
    'name': sName,
    'ocDate': sOcDate,
    'icDate': sIcDate,
    'characters': aCharacters,
    'happenings': aHappenings,
    'loot': aLoot,
    'repercussions': aRepercussions
  }
}

export {fetchAllCharacters, fetchAllSessions};