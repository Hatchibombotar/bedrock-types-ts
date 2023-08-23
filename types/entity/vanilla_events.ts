import { MinecraftFilter } from "./Filter"
import { Target } from "./Target"

export type EventList = {
    [event: string]: Event
}

type Event = {
    sequence?: sequence,
    randomize?: randomize,
    filter?: MinecraftFilter,
    add?: add
    remove?: remove,
    set_property?: set_property,
    run_command?: run_command
}

type EventRandomised = Event & {weight?: weight}

type sequence = Event[]
type randomize = EventRandomised[]
type add = {
    component_groups: string[]
}
type remove = {
    component_groups: string[]
}
type set_property = {
    [property: string]: any
}
type run_command = {
    command: string | string[],
    target: Target
}
type weight = number
