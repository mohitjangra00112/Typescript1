//// Two different ways for Interface or type 

export interface DraftAPIResponse {
    ID: number;
    UserID: number;
    DraftName: string;
    Timestamp: string;
    UpdatedAt: string;
    Portfolio_info: {
        totalCorpus: number;
        riskProfile: string;
        entity: string;
        totalAllocation: number;
    };
    Asset_Allocation: Array<{
        id: number;
        assetClass: string;
        category: string;
        allocation: string;
        preTaxReturn: string;
        postTaxReturn: string;
    }>;
    Ips_data: Array<{
        id: number;
        category: string;
        sub_category: string;
        criteria: string;
        min_value: string;
        max_value: string;
        selected_value: string;
    }>;
}

// Best Practice 

export interface UserRef {
  user_id: number;
}

export interface PortfolioInfo {
  totalCorpus: number;
  riskProfile: string;
  entity: string;
  totalAllocation: number;
}

export interface AssetAllocation {
  id: number;
  assetClass: string;
  category: string;
  allocation: string;
  preTaxReturn: string;
  postTaxReturn: string;
}

export interface IpsData {
  id: number;
  category: string;
  sub_category: string;
  criteria: string;
  min_value: string;
  max_value: string;
  selected_value: string;
}

export interface Draft {
  id: string;
  draftName: string;
  timestamp: string;
  updatedAt: string;
  user: UserRef;
  portfolioInfo: PortfolioInfo;
  assetAllocation: AssetAllocation[];
  ipsData: IpsData[];
}
