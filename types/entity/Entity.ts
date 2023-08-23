import { ComponentList } from "./vanilla_components"
import { EventList } from "./vanilla_events"

export type Entity = {
    "format_version": string,
    "minecraft:entity": {
        "description": {
            "identifier": string,
            "is_spawnable": boolean,
            "is_summonable": boolean,
            "is_experimental": boolean
        },
        "component_groups"?: {
            [group_name: string]: ComponentList
        }
        "components": ComponentList
        "events"?: EventList
    }
}
