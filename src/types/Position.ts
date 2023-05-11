export interface Position {
  id: number;
  name: string;
}

export interface PositionsAPIResponse {
  success: boolean;
  positions: Position[];
}
