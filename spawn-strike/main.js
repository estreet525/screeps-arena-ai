// Screeps Arena Git Spawn Strike main.js

import { getObjectsByPrototype } from 'game/utils';
import { StructureSpawn } from 'game/prototypes';
import { ATTACK, MOVE, ERR_NOT_IN_RANGE } from 'game/constants';

const mySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => spawn.my);
const enemySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => !spawn.my);
var creep;

export function loop() {
    if(!creep) {
        creep = mySpawn.spawnCreep([ATTACK, ATTACK, MOVE, MOVE]).object;
    }
    if(creep.attack(enemySpawn) == ERR_NOT_IN_RANGE) {
        creep.moveTo(enemySpawn);
    }
}