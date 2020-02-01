# Status Effects

A status effect lasts either until it is removed, or for a duration specified by the effect that imposed the status effect. Status effects may specify their own rules on how they can be removed.

Some status effects can be gained multiple times, while others cannot. If a status effect does not specify otherwise and it is gained more than once, each instance of the status effect has its own duration, but the effect is only applied once.

Status effects can optionally be referred to by their symbols.

## 😡 Angry

The angry status represents extreme frustration or hatred that clouds one’s thinking.

* An angry creature suffers threat on all [Intuition](../game-concepts/ability-scores-and-skills.md#intuition)-based checks.
* An angry creature gains a `+3` bonus to all [Strength](../game-concepts/ability-scores-and-skills.md#strength)-based checks and weapon damage rolls.

{% hint style="warning" %}
The angry status can be gained more than once.
{% endhint %}

## 💔 Bleeding Out

The bleeding out status represents any injury that will cause death if immediate medical attention is not administered.

* A creature that is bleeding out must make a DC `10` [💙 Resist Death](../game-concepts/ability-scores-and-skills.md#resist-death) check at the beginning of each of its turns, recording a success or failure until three successes or three failures are recorded. Three successes ends this status; three failures results in death.
* Rolling triumph on any of these checks restores `1 💖` and ends the status effect; rolling disaster renders the creature [👻 Unconscious](status-effects.md#unconscious).
* If a creature that is bleeding out takes damage, it counts as one failure. If the damage is from a critical hit, the creature also falls [👻 Unconscious](status-effects.md#unconscious).
* If a creature that is bleeding out is healed, it counts as one success. If the creature is restored to full hit points, the status effect ends.
* If a creature gains the bleeding out status effect again, it counts as one failure.

## 😎 Blinded

The blinded status represents temporary or permanent impairment to a [sense](senses.md). When a creature becomes blinded, the imposing effect may specify which sense it blinds \([tremorsense](senses.md#tremorsense), [sphynxvision](senses.md#sphynxvision), [truevision](senses.md#truevision)\), but if it does not, it is referring to [vision](senses.md#vision) & [darkvision](senses.md#darkvision).

* A blinded creature automatically fails all checks that require the blinded sense. Blinded creatures also suffer threat on attack and evasion checks.
* If a creature has at least one applicable sense and that sense is not blinded, that creature may ignore the effects of being blinded.

{% hint style="warning" %}
The blinded status can be gained more than once, but only if a different sense is blinded each time.
{% endhint %}

## 🤩 Charmed

The charmed status represents strong but unsafe positive emotions, such as infatuation or idolization, either natural or artificially induced by magical means.

* A charmed creature can't willingly target the source of the status with attacks or any harmful effect or action.
* A charmed creature suffers threat on all [Intuition](../game-concepts/ability-scores-and-skills.md#intuition)-based checks against the source of the status.

## 🦴 Crippled

The crippled status represents severe physical impairment not representable through damage.

* A crippled creature suffers [disaster](../game-concepts/success-and-failure.md#disaster) on all [Strength](../game-concepts/ability-scores-and-skills.md#strength), [Agility](../game-concepts/ability-scores-and-skills.md#agility), and [Vitality](../game-concepts/ability-scores-and-skills.md#vitality)-based checks on a natural result of 1–2.

{% hint style="warning" %}
The crippled status can be gained more than once. If a creature has more than one level of crippled, the range for disaster increases by 1 for each level \(e.g. 4 levels of crippled triggers disaster on a natural result of 1–5\).
{% endhint %}

## 📯 Deafened

The deafened status represents temporary or permanent impairment to hearing.

* A deafened creature automatically fails all checks that require [hearing](senses.md#hearing).

## 🥵 Exhausted

The exhausted status represents severe fatigue and strain not representable through damage.

* An exhausted creature suffers [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on all checks.

{% hint style="warning" %}
The exhausted status can be gained more than once.
{% endhint %}

{% hint style="info" %}
The exhausted status is reduced by 1 level each time the exhausted creature finishes a long rest, provided the creature has ingested food and drink.
{% endhint %}

## 😱 Frightened

The frightened status represents overwhelming terror.

* A frightened creature suffers different effects depending on the [margin of failure](../game-concepts/success-and-failure.md#margin-of-success-or-failure):
  * **1–3: Fight.** The frightened creature must attempt to engage the source of the status effect, making all attack and spell rolls with [threat](../game-concepts/success-and-failure.md#dominance-and-threat).
  * **4–6: Flight.** The frightened creature must attempt to flee from the source of the status effect, and is unable to willingly move closer to the source.
  * **7+: Freeze.** The frightened creature cannot willingly move, and makes all [Strength](../game-concepts/ability-scores-and-skills.md#strength), [Agility](../game-concepts/ability-scores-and-skills.md#agility), and [Intuition](../game-concepts/ability-scores-and-skills.md#intuition) checks with [threat](../game-concepts/success-and-failure.md#dominance-and-threat).
* A frightened creature suffers threat on [initiative](../playing-the-game/encounters.md#initiative) checks.

{% hint style="warning" %}
The frightened status can be gained more than once, but only once from each source.
{% endhint %}

## 😬 Paralyzed

The paralyzed status represents an inability to move.

* A paralyzed creature cannot move, speak, take [actions](../playing-the-game/encounters.md#actions) or [reactions](../playing-the-game/encounters.md#reactions).
* A paralyzed creature automatically fails [Strength](../game-concepts/ability-scores-and-skills.md#strength) and [Agility](../game-concepts/ability-scores-and-skills.md#agility)-based checks unless the other party rolls [disaster](../game-concepts/success-and-failure.md#disaster).

## 🗻 Petrified

The petrified status represents being transformed into a rigid material.

* A petrified creature is transformed, along with any nonmagical objects it is wearing or carrying, into a solid inanimate substance. While in this state, the creature is immune to [toxic damage](damage.md#damage-types) and cannot gain any other status effects. Any alterations to this rigid form remain after the petrified status is removed.
* A petrified creature cannot move, speak, take [actions](../playing-the-game/encounters.md#actions) or [reactions](../playing-the-game/encounters.md#reactions).
* A petrified creature automatically fails [💨 Evasion](../game-concepts/ability-scores-and-skills.md#evasion) checks unless the attacker rolls [disaster](../game-concepts/success-and-failure.md#disaster).

{% hint style="warning" %}
The petrified status can be gained up to twice. If a creature has more than one level of the petrified status, it becomes [unconscious](status-effects.md#unconscious) \(see the status effect\) until the petrified status ends.
{% endhint %}

## 🤢 Poisoned

The poisoned status represents physical, mental, or emotional impairment due to a toxic substance.

* A poisoned creature suffers unique effects depending on the source of the status.
* Some poisons and the poisoned status they impose can be cured by an applicable antidote. The Storyteller decides the availability of antidotes.

Below are some common poisons:

### Intoxication \(Alcohol\)

**Effects:** Suffer [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on all [🤫 Stealth](../game-concepts/ability-scores-and-skills.md#stealth), [💨 Evasion](../game-concepts/ability-scores-and-skills.md#evasion), [💭 Reasoning](../game-concepts/ability-scores-and-skills.md#reasoning), [💞 Insight](../game-concepts/ability-scores-and-skills.md#insight), [👁‍🗨 Perception](../game-concepts/ability-scores-and-skills.md#perception), and [😈 Resist Enchantment](../game-concepts/ability-scores-and-skills.md#resist-enchantment) checks; gain dominance on [😤 Resist Fear](../game-concepts/ability-scores-and-skills.md#resist-fear) checks; gain `1d8 💛`.

**Antidote:** [Long rest](../playing-the-game/adventuring.md#long-rest)

### Venom

**Effects:** Suffer [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on all [🏃‍♂️ Resist Restraint](../game-concepts/ability-scores-and-skills.md#resist-restraint) and [💙 Resist Death](../game-concepts/ability-scores-and-skills.md#resist-death) checks; take `1d4 🦠` every hour.

**Antidote:** Antivenom

### Truth Serum

**Effects:** Suffer [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on all [💞 Insight](../game-concepts/ability-scores-and-skills.md#insight) and [🤥 Deception](../game-concepts/ability-scores-and-skills.md#deception) checks.

**Antidote:** [Short rest](../playing-the-game/adventuring.md#short-rest)

### General Anesthesia

**Effects:** Succeed a `DC 15` [😈 Resist Enchantment](../game-concepts/ability-scores-and-skills.md#resist-enchantment) check or become Unconscious \(see the status effect\), and take an amount of `🦠` equal to the [margin of failure](../game-concepts/success-and-failure.md#margin-of-success-or-failure).

**Antidote:** [Short rest](../playing-the-game/adventuring.md#short-rest)

{% hint style="warning" %}
The poisoned status can be gained more than once, but only once from each source/toxin.
{% endhint %}

## 🤸 Prone

The prone status represents a low stance, either from laying down or getting knocked over.

* A prone creature’s only movement option is to crawl. Every foot of movement in this way costs 1 extra foot.
* A prone creature gains [dominance](../game-concepts/success-and-failure.md#dominance-and-threat) on [🤫 Stealth](../game-concepts/ability-scores-and-skills.md#stealth) checks.
* A prone creature suffers [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on attack and [💨 Evasion](../game-concepts/ability-scores-and-skills.md#evasion) checks against creatures less than 15 feet away, but gains [dominance](../game-concepts/success-and-failure.md#dominance-and-threat) on attack and [💨 Evasion](../game-concepts/ability-scores-and-skills.md#evasion) checks against creatures 15 or more feet away.

{% hint style="info" %}
A creature can drop prone at the cost of 5 feet of movement, or end the prone status effect on itself by standing up at the cost of half their movement.
{% endhint %}

## 🔗 Restrained

The restrained status represents being limited or otherwise bound, being unable to move.

* A restrained creature’s movement speed becomes 0.
* A restrained creature suffers [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on attack and [💨 Evasion](../game-concepts/ability-scores-and-skills.md#evasion) checks.

## 🤒 Sick

The sick status represents a physical disorder, such as an infection or illness.

* A sick creature’s movement speed is halved.
* A sick creature suffers [threat](../game-concepts/success-and-failure.md#dominance-and-threat) on all [Vitality](../game-concepts/ability-scores-and-skills.md#vitality)-based checks.

{% hint style="warning" %}
The sick status can be gained more than once. However, if a creature has more than one level of the sick status, its speed is not reduced by more than half.
{% endhint %}

## 😵 Stunned

The stunned status represents being staggered or in shock.

* A stunned creature can’t move, and can speak only falteringly.
* A stunned creature automatically fails [Strength](../game-concepts/ability-scores-and-skills.md#strength) and [Agility](../game-concepts/ability-scores-and-skills.md#agility)-based checks.

## 👻 Unconscious

The unconscious status represents total mental shutdown, as if asleep.

* An unconscious creature can’t move, speak, take [actions](../playing-the-game/encounters.md#actions) or [reactions](../playing-the-game/encounters.md#reactions).
* An unconscious creature is not aware of its surroundings.
* An unconscious creature automatically fails [Strength](../game-concepts/ability-scores-and-skills.md#strength) and [Agility](../game-concepts/ability-scores-and-skills.md#agility)-based checks.
* When a creature becomes unconscious, it drops whatever it is holding and falls to the ground, becoming [Prone](status-effects.md#prone) \(see the status effect\).

## 💘 Wounded

The wounded status represents severe physical injury not representable by damage.

