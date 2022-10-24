import { computeTotalValue, toCommaSeparated } from "@/components/helpers";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";

/**
 * Colors for Asset diversification card, matching number of 
 * avaliable Asset types
 */
const COLORS = [
  "warning",
  "success",
  "danger",
  "info",
  "primary",
  "dark",
  "secondary",
  "light",
  "white",
];

export interface AssetAggregateListItem {
  color: string;
  icon: string;
  type: string;
  value: number;
  percentage: number;
}

/**
 * Aggregate total value for each Asset type
 * @param assetsMap 
 * @returns 
 */
function aggregateAssetTypeValue(assetsMap: Map<string, AssetData>): Map<string, number> {
  // To array of AssetData
  const values: Array<AssetData> = Array.from(assetsMap.values());
  const assetTypesAggregate = new Map<string, number>();
  // Summarize total value for each Asset type
  values.forEach((item) => {
    const type = item.type;

    if (!assetTypesAggregate.has(type)) {
      assetTypesAggregate.set(type, item.totalValue);
    } else {
      const updatedTotalValue = Number(assetTypesAggregate.get(type)) + item.totalValue;
      assetTypesAggregate.set(type, updatedTotalValue);
    }
  });

  return assetTypesAggregate;
}

/**
 * Build list for AssetAggregateCard
 * @param assetsMap
 * @returns 
 */
export function buildAssetsAggregateList(assetsMap: Map<string, AssetData>): Array<AssetAggregateListItem> {
  const totalValue = computeTotalValue(assetsMap);
  const assetTypeValuesAggregate: Map<string, number> = aggregateAssetTypeValue(assetsMap)
  const list = Array<AssetAggregateListItem>();
  const numOfColors = COLORS.length - 1;
  let index = 0;

  assetTypeValuesAggregate.forEach((value, assetType) => {
    if (index > numOfColors) {
      index = 0
    }
    const percentage = (value / totalValue) * 100;
    const item: AssetAggregateListItem = {
      color: COLORS[index++],
      icon: "icons/duotune/abstract/abs027.svg",
      type: assetType,
      value: toCommaSeparated(value),
      percentage: toCommaSeparated(percentage, 1),
    };
    list.push(item);
  });

  return list;
}

/**
 * 
 * @param assetsMap 
 * @param key 
 * @param numOfAssets
 * @param ascending
 * @returns 
 */
export function sortAssets(assetsMap: Map<string, AssetData>, key: string, numOfAssets: number, ascending: boolean = false): Array<AssetData> {
  // To array of AssetData
  const values: Array<AssetData> = Array.from(assetsMap.values());
  // Sort by key in AssetData
  values.sort((a: AssetData, b: AssetData) => {
    return a[key] - b[key];
  });

  if (!ascending) {
    values.reverse()
  }

  return values.slice(0, numOfAssets);
}

/**
 * 
 * @param arr 
 * @param key 
 * @param numOfItems
 * @param ascending
 * @returns 
 */
export function sortMapArray(arr: Array<{}>, key: string, numOfItems: number, ascending: boolean = false): Array<{}> {
  // Sort by key in AssetData
  arr.sort((a: any, b: any) => {
    return a[key] - b[key];
  });

  if (!ascending) {
    arr.reverse()
  }

  return arr.slice(0, numOfItems);
}
