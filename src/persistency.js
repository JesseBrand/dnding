import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 34},
    {name: 'Castle-8', xp: 30},
    {name: 'Horatio ', xp: 29},
    {name: 'Alaric', xp: 25},
    {name: 'Nuk', xp: 25},
    {name: 'Ru', xp: 24},
    {name: 'Bill', xp: 21},
    {name: 'Exilian', xp: 21},
    {name: 'Paxton', xp: 21},
    {name: 'Enphine', xp: 20},
    {name: 'Sir Dixon', xp: 20},
    {name: 'Aboouck', xp: 19},
    {name: 'Drathuul', xp: 18},
    {name: 'Bavon', xp: 17},
    {name: 'Freya', xp: 17},
    {name: 'Girard', xp: 17},
    {name: 'John', xp: 17},
    {name: 'Navani', xp: 17}
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
      'an Ioun Stone of Insight (Wisdom)',
      'a dragon-blessed glaive'
    ], [
      'Drathuul was annihilated by a shadow beholder',
      'An agreement was struck with the dragons inhabiting Gamwater Quarry',
      'Gamwater Quarry became available as a location'
    ]),
    _constructSession(11, 'Prove your Worth', '7/12/2022', 'Sidas 2', ['Sam', 'Castle-8', 'Exilian', 'Horatio', 'Nuk', 'Aboouck', 'Paxton', 'Bill', 'Bavon', 'Enphine'], [
      'discussed current affairs in the tavern and noticd Bavon was not getting served anymore',
      'were approached by Sir Dozak the Magnificent who told Sir Sam his expedition was ready to go',
      'left with Sir Dozak after having been promised treasure and set off towards Hornwood',
      'reached Hornwood where Bavon attempted to catch a bird, which after dramatically failing ended up amazingly smooth',
      'headed into the  woods following Sir Dozak\'s lead and reached a blocked cave entrance',
      'had Aboouck and Bavon volunteer to place explosives at the entrance, after which Horatio detonated them',
      'noticed elven runes above the entrance as Exilian quickly headed down, followed by the others, including Sir Dozak and his bodyguards',
      'reached a large overgrown room with a murky pool in the middle and a glimmering gate to the right, then entered quickly',
      'were set upon by living bushes that surprised Exilian and the others, as they struggled to catch up',
      'dealt with the menaces, Bavon getting injured and Exilian ingesting some of the murky water',
      'noticed they were not feeling too well, a few party members gaining exhaustion',
      'explored the room and examined the portal; after Paxton was assigned volunteer by Sir Dozak to go through but did not comply, a bodyguard attempted to push Enhpine inside, who resisted; Horatio proceeded to teleport him inside the gate, which apparently did not work',
      'proceeded further into the ruin, approaching a crossroads where the party split while Nuk\'s mage hand opened a trapped chest that did not contain anything; Bavon took the mechanism with him',
      'had Paxton, Exilian and Bill reach a large overgrown room with an overgrown chasm and several bells hanging from the wall, then returned to the party, but not before Bill could not resist the urge to ring a bell',
      'had Sir Dozak abandon the split-off members and usher the rest into another corridor, that led to a well at the end of a tunnel',
      'had Castle-8 with Aboouck on his shoulder and Sam approach the well, only for tentacles to shoot out from the well and grab them',
      'saw Aboouck casting haste on two allies, only for his wild magic to trigger and create a puddle of grease at the most inopportune location',
      'saw Sam and Castle-8, followed by Horatio, be drawn into the well; Bavon then growing in size before he was drawn into the well too, effectively sealing the stone tube',
      'saw the monster do a lot of damage biting Sam and Horatio when Exilian pulled a trick from his sleeve and dropped a bead of force into the pit, which landed and expanded into a sphere above Castle-8, Sam and Horatio but below Bavon',
      'cut the tentacle grabbing Bavon, then pushed the expanded sphere out of the well, Bavon - still enlarged - becoming squashed between the sphere and the ceiling',
      'pushed the sphere out of the way, after which the creature was dealt with swiftly',
      'searched the pit while down there, Sam pocketing a heavy magical stone',
      'decided to call it a day, went back outside where Sir Dozak and his guards started setting up a camp, where some of the party remained as the rest returned to Ebonwatch'
    ], [
      'an interesting heavy stone'
    ], [
      'Sir Dozak set out on his expedition, recruiting the party',
      'An ancient ruin in the Royal Woodlands became available as a location'
    ]),
    _constructSession(12, 'Rebellion', '4/1/2023', 'Sidas 3', ['Sam', 'Castle-8', 'Exilian', 'Horatio', 'Paxton', 'Bill', 'Bavon'], [
      'met up in the tavern where Sam made an announcement about the Duke paying them to safeguard the quarry',
      'quickly departed to join Sir Dozak at the camp in the Royal Woodlands, then headed back into the ruins together',
      'saw Bavon and Exilian examine the pool of water once more as Bavon threw multiple gold coins into it after which Sam and Bavon explored the previously uncovered tunnels once more, much to the ire of Sir Dozak',
      'headed into the room with the big bells, where they noticed a gnoll stuck in the high growth inside the great chasm dividing the chamber',
      'approached the gnoll only to hear him utter something about the dark coming, before the growth turned on them',
      'formed a line with Paxton up front with his glaive while Castle-8, Bill and Dozak\'s troops held back the tentacles, while the others attacked the plant creature from a distance',
      'beat the plant creature then regrouped, noticed Bavon try and pickpocket Sir Dozak, which everyone was alarmed to when a loud alarm went off, then had Exillian show how pickpocketing should really be done if they intended to using his invisible mage hand',
      'witnessed Sir Dozak go down hard on Bavon, pointing him at his responsibilities and addressing Sam to keep his employee under control',
      'had Exillian continue and run into the next room while all this happened, trying to cross some slippery stepping stones but failing and falling into a crevice, then be promptly assaulted and swallowed by a giant plant tentacle creature, unable to see or breathe',
      'ran forwards to aid Exillian, Sir Dozak instructing Bavon to stay behind and wait and have one of his men guard Bavon',
      'saw Paxton and Bill engage another plant creature that had crawled up, before the creature swallowed Paxton whole',
      'turned their attention to these two plant creatures as Exillian was forgotten and Bill was also swallowed for a short while',
      'had Horatio create a puddle of grease, not really helping the situation, as the plant creatures were engaged one by one, with the help of Sir Dozak and one of his man, who went down in the onslaught',
      'did not pay attention how Bavon disobeyed his guard, engaged the plant creatures from a distance, then got in a fight with the guard, killed him then hid his body down in the trench, except for Horatio noticing',
      'finally took care of the plants then got into another shouting match with Sir Dozak who was now furious at Bavon; Bavon saved his hide lying about the guard who supposedly fled',
      'distracted Dozak enough for Sam, Exilian and Paxton to search the trench for treasure, finding a small heavy chest that did catch Sir Dozak\'s eye, but then climbed out on the other side and opened it secretly, removing a couple of items then closing it back up again',
      'evaluated the next room, which was opposite of the crevice where the first thorny plant was fought, but decided to return to camp to rest and recuperate',
      'exited the ruins while Sir Dozak asked for Sam\'s input on what to do with Bavon and whether or not he could be trusted... and kept alive'
    ], [
      'A heavy, small chest',
      '3 spell scrolls: Disguise Self (lvl1), Misty Step (lvl2) and Meld Into Stone (lvl3)',
      'A ring engraved with fishes',
      'A muddy potion',
      '4 arrows'
    ], [
      'The expedition into the ancient ruin in the Royal Woodlands proceeded slowly', 
      'Bavon has earned the ire of Sir Dozak '
    ]),
    _constructSession(13, 'Another Sir', '18/1/2023', 'Sidas 4', ['Sam', 'Castle-8', 'Nuk', 'Paxton', 'Bill', 'Enphine', 'Sir Dixon'], [
      'saw Enphine come into the tavern somewhat excited and distressed at the same time, with news from the observatory; she tols the party the gnomes had fixed the telescope and are able to look under the shard using some mirror construction; it unfortunately turned the gnome watching mad',
      'shared news by Sam and Paxton about some shadowy figures appearing around the quarry and attacking shipments',
      'noticed an old man in a brown robe walk in and ask Florellius for Sir Dozak, who directed them to the party where he introduced himself als Sir Dixon Fire and explained his goals of aiding Sir Dozak and cleansing the shard of evil',
      'decided their priority was to protect the quarry, but Nuk offered to take Sir Dixon along and bring him to Sir Dozak afterwards',
      'left and set out towards Gamwater Quarry only to find Bavon chained up mining stone; after becoming upset Sam and Bavon explained that this was for the better',
      'went into the quarry and encountered Nivrath and Essephy once once, who gave some details about the shadow creatures; they explained how they could only be harmed in sunlight',
      'concluded they could not face the creatures, then set out to find Sir Dozak, but not before informing the quarry foreman to only vacate the quarry during the night, who in turn requested more security around dusk',
      'travelled through Ebonwatch and Hornwood to Sir Dozak\'s Forward Camp where he enlightend the party to the contents of the chest, which were 3 scrolls and 4 arrows, who they were quickly able to identify as Disguise Self, Misty Step and Meld into Stone, which they agreed to sell',
      'entered the ruins alongside Sir Dozak and his men, then proceeded back to the large chamber with the crevice as Enphine created away across the stepping stones by creating a bridge of mud with her spells',
      'attempted to open the big door through sheer strength which was utterly unsuccesful, then opened the smaller door with such strength that Castle-8 flew through and landed at the bottom of the stairs',
      'explored a small room with a nice old carpet, an engraving of a splendid bow and a flower pot with a green plant growing out of it',
      'had Bill investigate the plant, which caressed him, instantly creating a bond with him after which he took it along',
      'saw Sir Dixon perform a silly little dance which supposedly allowed him to see magic items, seeing the magic of the flower pot for an instance before Bill stored it, but also identifying the bow on the wall as magical',
      'attempted to ring the bells in the main chamber simultaneously when they heard the movement of stone over stone',
      'saw Paxton notice a great demon emerge from the other side of the chamber, sprout a pair of wings, cross the gap then engage them in combat',
      'noticed Paxton communicate with the demon who gave him an evil smile, as Castle-8 and Bill were grabbed by great Picers while the party engaged it, Sir Dozak joining the effort but his men merely lighting the situation with their torches',
      'saw Sir Dixon changed into a Brown Bear during the fight while they slew the demon, who upon his death made mental contact with Paxton, who was left somewhat shocked',
      'headed out to the room where the demon came from and explored it to find many books, chests, supplies and potions lost beyond recovery, but did find a green elvish cloak in remarkable good shape while Nuk was able to salvage an Alchemy Set and Bill recovered some potion bottles',
      'found a hole in the wall which Sir Dixon explored as a little spider, only to return back to the first main hall where they encountered the first portal',
      'returned to the chasm room and attempted to open the main doors through sounding the bells in the correct order; after a lot of attempts Sam\'s first suggestion proved to be right and the double doors opened',
      'emerged into a huge tall room stutted by pillars and carefully went inside as Sir Dixon started another silly dance',
      'discovered a huge white dragon statue while Castle-8 approached a huge dead tree which he attempted to light on fire, only to have it emerge to be a living, angry tree creature',
      'engaged the tree together, throwing fireballs, smites, daggers and heavy punches while the creature performed sweeping attacks, throwing the party backwards and bringing Sir William the Torchbearer down, but ultimately could not withstand the sheer might of Enphine\'s fireballs',
      'noticed a portal behind the creature light up, then proceeded to investigate it, Bill and Castle-8 discovering it was possible to travel between this portal and the one at the entrance',
      'discovered a stone shaft down into the ground, which was filled with rubble, when Sir Dozak indicated the next step in the expedition would involve excavating it',
      'noticed a faint magical aura within the dragon statue before leaving the ruins and returning to Ebonwatch'
    ], [
      'a splendid green elvish cloak',
      'an alchemy set',
      'a sentient plant',
      'a nice-looking but ancient rug'
    ], [
      'Paxton had a strange encounter with a large demon',
      'The expedition into the ancient ruin in the Royal Woodlands came to a hold as a deep shaft was uncovered that needs to be excavated', 
      'The Portals in the Elven Ruins were activated',
      'The party learned that some way of providing daylight will be required to face the large shadow creature'
    ]),
    _constructSession(14, 'The Trapped Lair', '1/2/2023', 'Sepdas 1', ['Sam', 'Horatio', 'Paxton', 'Bill', 'Enphine', 'Sir Dixon'], [
      'met up in the inn, missing Horatio, Enphine and Nuk, when Paxton told them that the body of a child was found somewhere outside town which looked as if his life essence was drained, the body looked shriveled; then reported it to the Chamberlain',
      'noticed Horatio and Enphine walking in the inn, explaining that Enphine and Nuk had looked through the telescope, Nuk lost his mind doing so but Enphine was decided she was better off by not looking into it for too long',
      'had Enphine explain that she saw some kind of force field covering the dark bottom of the shard which had a great many creatures of various sizes working and digging in there',
      'asked Enphine many questionsabout these creatures and informed Chaimberlain Gerard about the issue, after which he left to report it to the Duke himself',
      'looked on as Sir Dixon presented a map of a couple of the different shards which the empire had expanded to, telling them about the shard Asholas which was destroyed by a demon army, and that it could also happen upon this shard',
      'had Sam mention the idea of having the Lizardfolk help them in this battle, to which Sir Ginimus was surprised as his only history with them was being ambushed and having several of his men killed',
      'decided on the loot from the Elven Ruin and decided to sell pretty much all of it and split the money, Enphine still considering paying some of the scrolls',
      'headed out towards the Slumbering Hills to aid the lizards in their need to fight the amphibian creatures they faced before',
      'came by Wheldrake Fortress, then continued to the Mine without effort, meeting Ian out front who asked for coffee and mentioned their bunny friend',
      'reached the poisonous fog, where Sir Dixon gave Sam an air bubble around his head in order to scout ahead, where he found a barrier before returning with his findings',
      'cleared out a lot of the poisonous fog as Enphine cast her gust the Sir Dixon used Gust of Wind to clear out most of the tunnel, who got poisoned and lost half his health before listening to the groovy tunes of Horatio',
      'went into the tunnel, but faced a last barier of thick poisonous fog that would not clear it, Sam went in and they heard a fuse being lit before Sam came out shout "RUN!"',
      'were surprised by a massive explosion as Sam had detonated a horn of gunpowder when half the cave started to tremble and rocks started to fall',
      'watched the gas clear out and the force field gone and proceeded along the stream to a bridge which led to two tunnels as the rivier was blocked off by debris',
      'investigated several tunnels, discovering most of them blocked with only one actually leading to an interisteing room, while one other ended in a weird flat surface which they could not find anything special about',
      'continued into a larger room with a large pile of gold in the middle where Bill spotted loose rocks among the ceiling',
      'noticed two large slabs of rock where Sam scouted around',
      'saw Bill approach the gold which as he touched it turned to a brown moldy dust that quickly spread through the room, poisoning Enphine as Sam was protected by his air bubble, after which Enphine was helped out by Horatio',
      'had Sam explore further, discovering a passage down and some ropes leading from back of the stone slabs',
      'attempted to push one of the slabs aside, with only Paxton really trying and the rest flailing about',
      'remembered Sam had a crowbar, which Paxton used to lift a slab with the help others, which eventually succeeded',
      'followed the passage down, leading to spiral staircase down to an old, very wet ruin',
      'entered the room with Sam in front as a net dropped down on him which he was easily able to avoid, before they were set upon by several of the amphibian Troglodytes who remained hidden until now',
      'saw Bill run north dodging another net effortlessly, dealing some severe damage to several Troglodytes he spotted',
      'noticed more and more creatures pouring out of the side chambers before hearing some loud roars as several huge Troglodytes came charging from the rooms and descended upon the party',
      'wavered as they were assaulted from all sides, Bill quickly going down to the onslaught of the monsters, which also smelled extremely bad',
      'kept saving Bill as he kept bleeding out, each time attacked by the creatures once more, going down three times before the battle was done',
      'saw Enphine cast one fireball after the other from the stairs, dealing massive damage, while Sam employed stunning strikes, Sir Dixon changed into a bear and Paxton held his ground at Bill, while grooving on the Horatio\' Tunes',
      'searched the rooms after the battle was over, finding a wand with a blue flare on its end, which Horatio identified as a Wand of Magic Missile',
      'scouted a bit further into the next room, finding a set of stairs leading down that were entirely flooded',
      'turned back and decided to return to the Lizardfolk, cutting up some of the bigger Troglodytes and bringing some meat for the Lizardfolk, who were quite pleased',
      'discussed the progress with the Lizardfolk and asked them for help with the demons; they insisted they needed to deal with the Troglodytes first and needed the party to find a way to continue through the water',
      'were told by the Lizardfolk they were disappointed in the time it took the party to progress, but rewarded them with a small amulet they found',
      'returned to Ebonwatch to rest'
    ], [
      'A Wand of Magic Missile',
      'A small amulet with many tiny mechanical components'
    ], [
      'The party cleared a way into the troglodyte lair',
      'The lizardfolk were happy with the party\'s progress and indicated they would need to find a way to breathe underwater for the next stage of the assault',
      'The lizardfolk were made aware of the demon threat and were asked to help'
    ]),
    _constructSession(15, 'The Jungle Bridge', '15/2/2023', 'Sepdas 2', ['Alaric', 'Sam', 'Castle-8', 'Exilian', 'Horatio', 'Paxton', 'Enphine', 'Sir Dixon', 'Girard', 'Ru'], [
      'met up in the the inn when Sam and Dixon reported on their meeting with the Duke, about demons overrunning the shard and that they could all be in real trouble being outnumbered, recommending the party members focus their activities on preparing against this invasion',
      'were disturbed by a rumble and shouting guards outside the tavern, having Sir Dixon, Sam, Enphine, Horatio and Alaric go outside to check it out',
      'noticed a creature/person outside of the gate with a mask on, claiming he is unable to remove it, Sir Dixon vaguely recognising the voice and asking him about it, then being recognised himself for his involvement on Asholas along with Sir Dozak',
      'had the creature identify himself as Ru after which Sir Dixon remembers him, but the guards still refusing to stand down, they mentioned someone like Sir Dozak would have to issue such a command',
      'had Horatio cast vortex warp on Ru and teleport him into the inn, leaving the guards startled and reaching for their weapons, but giving up quickly',
      'were approached by another stranger introducing himself to the 4 adventures at the gate as Girard de Kosigan, a holy priest from the newly built church just outside Ebonwatch',
      'got to know Girard who mentioned he was looking for adventures and indicated he thought the party needed a healer and that he could supply this added value',
      'reconvened in the tavern and spoke with Ru and Girard, who mentioned he was from the Shard of Addiarus and gave a round of Boatliver Ale to the entire Inn',
      'made plans where to go next, mentioned the quarry as Girard claimed he could cast daylight which would help in the fight with the shadow monsters',
      'listened toDixon mention that a way to communicate with Tuletus so that they could call for reinforcements would be of great value but might take a while, so the sooner they starter on it the greater the chance that they would arrive on time',
      'decided to attempt to recover the escaped slaves to find a way to communicate with other shards, then left for Hornwood and decided to show off their abilities on ways to cross the river, Exilian getting in a lot of trouble before realizing he could put his ring on',
      'headed towards Sir Dozak\'s Camp quietly and explained to him they were looking for slaves, having Lambert join them to show them where they were spotted',
      'headed further into the woods and came accross the sleeping Giant some of them encountered before, but decided to avoid it for now', 
      'noticed the forest into a more dense jungle which became increasingly more difficult to move through, then found a hilltop which Sam scouted out, noticing a very long bridge through the canopy',
      'left Lambert behind and climbed the hill, then embarked upon the bridge which seemed to stretch on for a long while, crossing carefully',
      'noticed a cricket-like man run towards them as two griffons were in pursuit, hunting it, then came to its rescue',
      'saw the griffons take down the cricket, then saw Alaric grab his new greataxe and slash down a griffion nearly in one swing before finishing the other one which was already heavily damaged by Sam as well',
      'had Girard patch up the cricket again, which was very thankful but impossible to understand until Exilian cast Comprehend Languages and had some tough communication',
      'accepted a few portions of jerky as thanks from the cricket and received a sack with 3 dried beans and a large 2-headed trident weapon as a sign of thanks from it',
      'tried their best to ask the cricket for directions but only got as far as being directed further onto the bridge, mentioning a termite mound',
      'noticed a huge stone archway far, far off to the north, well beyond their reach for now, then reached the end of the bridge, still in the jungle, then noticed a large stone mound nearby',
      'approached the mound, noticing some large anteater-like creatures which they identified as fiends, but who apparently were not hostile to them and which they decided to ignore after careful collaboration',
      'continued towards the entrance of the termite mound then noticed the ground shaking as many creatures approached from underground, engaging the party',
      'were attacked by the termites that damaged the party Castle-8 and Alaric\'s armor, then saw Sam drop a horn of Gunpowder into one of the passageways which blew a large part of the mound apart and killed several termites',
      'had Girard cast Spiritual Guardians, creating a sphere of little celestial warriors to protect the party, inspiring Ru to do the same but who summoned more devilish spirits, which made short work of the remaining termites',
      'had Sir Dixon send out his bat familiar to investigate the cavern who lost the connection with the bat about 50 foot in',
      'looked around the place to investigate if the slaves had come past it, and noticed trails leading into the mound',
      'had Sir Dixon activate Detect Magic and noticed there was a magic barrier inside the cave, then headed back to Ebonwatch to return another day',
    ], [
      'none'
    ], [
      'The Party was made aware of the dire situation surrounding the Demon Invasion',
      'News of the long bridge in the Royal Woodlands made its way back to Ebonwatch'
    ]),
  ]
}

function _constructSession(iId, sName, sOcDate, sIcDate, aCharacters, aHappenings, aLoot, aRepercussions) {
  return {
    'id': iId,
    'sessionName': sName,
    'ocDate': sOcDate,
    'icDate': sIcDate,
    'characters': aCharacters,
    'happenings': aHappenings,
    'loot': aLoot,
    'repercussions': aRepercussions
  };
}

export {fetchAllCharacters, fetchAllSessions};