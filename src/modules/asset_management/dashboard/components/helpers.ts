import { computeTotalValue, toCommaSeparated } from "@/modules/asset_management/common/helpers";
import { AssetData } from "@/store/modules/assets/helpers/AssetsData";

/**
 * Colors for AssetClassesCardItems, matching number of 
 * avaliable Asset types
 */
const AssetClassesCardItemColors = [
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

export interface AssetClassesCardListItem {
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
function aggregateAssetClassesValues(assetsMap: Map<string, AssetData>): Map<string, number> {
  // To array of AssetData
  const values: Array<AssetData> = Array.from(assetsMap.values());
  const assetClassesValueAggregate = new Map<string, number>();
  // Summarize total value for each Asset type
  values.forEach((item) => {
    const type = item.type;

    if (!assetClassesValueAggregate.has(type)) {
      assetClassesValueAggregate.set(type, item.totalValue);
    } else {
      const updatedTotalValue = Number(assetClassesValueAggregate.get(type)) + item.totalValue;
      assetClassesValueAggregate.set(type, updatedTotalValue);
    }
  });

  return assetClassesValueAggregate;
}

/**
 * Build list for AssetClassesCard
 * @param assetsMap
 * @returns 
 */
export function buildAssetClassesCardList(assetsMap: Map<string, AssetData>): Array<AssetClassesCardListItem> {
  const totalValue = computeTotalValue(assetsMap);
  const assetClassesValueAggregate: Map<string, number> = aggregateAssetClassesValues(assetsMap)
  const list = Array<AssetClassesCardListItem>();
  const numOfColors = AssetClassesCardItemColors.length - 1;
  let index = 0;

  assetClassesValueAggregate.forEach((value, assetType) => {
    if (index > numOfColors) {
      index = 0
    }
    const percentage = (value / totalValue) * 100;
    const item: AssetClassesCardListItem = {
      color: AssetClassesCardItemColors[index++],
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
 * @param arr 
 * @param key 
 * @param numOfItems
 * @param ascending
 * @returns 
 */
export function sortMapArray<Type>(arr: Array<Type>, key: string, numOfItems: number, ascending = false): Array<Type> {
  // Sort by key in AssetData
  arr.sort((a: Type, b: Type) => {
    return a[key] - b[key];
  });

  if (!ascending) {
    arr.reverse()
  }

  return arr.slice(0, numOfItems);
}

/**
 *
 * @param assetsMap
 * @returns
 */
export function computeTotalProfit(assetsMap: Map<string, AssetData>): number {
  let sum = 0;
  assetsMap.forEach((value,) => {
    sum += value.totalValue - value.totalInvestment;
  });
  return sum;
}
