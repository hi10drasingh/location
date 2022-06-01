/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadGoogleMaps } from "./map"
import { LoadSuggestion } from "./suggestion"
import {
    LoadCacheStore,
    LoadUserStore,
    GetCacheData,
    getUserLocation
} from "./persist"
import IPlaceData, { Settings } from "./interface"
import { TriggerGlobalChange } from "./location"
import { ErrorHandler } from "./utils"

/**
 * Loads all dependencies required for plugin.
 *
 * @returns {Promise<Nullable<IPlaceData>>} - Loads all plugin dependencies and return global placeData from cache.
 */
const load = () =>
    new Promise<Nullable<IPlaceData>>((resolve, reject) => {
        LoadGoogleMaps()
            .then(() => {
                LoadSuggestion()
                LoadCacheStore()
                LoadUserStore()
            })
            .then(() => GetCacheData())
            .then(cacheData => {
                if (cacheData) resolve(cacheData)
                getUserLocation()
                    .then(dbData => resolve(dbData))
                    .catch(error => reject(error))
            })
            .catch(error => reject(error))
    })

/**
 * Loads all relevent dependencies if not already loaded before execution of callback.
 *
 * @param {Settings} settings - Load Setting of Plugin.
 * @param {(...params: any[]) => void} CB - Callback func after load function resolves.
 * @returns {(...params: any[]) => void} - Wrapper func whose signature is same as Cb func.
 */
const wrapper = <F extends (...params: any[]) => void>(
    settings: Settings,
    CB: F
) =>
    ((...args: any[]) => {
        const newSettings = settings
        if (!newSettings.isLoaded) {
            load()
                .then(placeData => {
                    newSettings.isLoaded = true
                    CB(...args)
                    if (!placeData) return
                    newSettings.placeData = placeData
                    TriggerGlobalChange(newSettings.placeData)
                })
                .catch(err => ErrorHandler.error(err))
        } else {
            CB(...args)
            TriggerGlobalChange(newSettings.placeData as IPlaceData)
        }
    }) as F

export default wrapper
