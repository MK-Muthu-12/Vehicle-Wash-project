
import { decimal, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";


export const washRecordTable = mysqlTable("wash_records", {
  id: int().primaryKey().autoincrement(),
  customerName: varchar("customer_name",{ length: 255 }).notNull(),
  phoneNo: int("phone_no").notNull(),
  address: varchar("address",{ length: 255 }),
  vehicleNo: varchar("vehile_no", { length: 255 }),
    vehicleType: varchar("vehicle_type",{ length: 255 }),
    washAmount: int("wash_amount",{ unsigned: true }), 
    createdAt: timestamp().defaultNow().notNull(),
    updateAT: timestamp(),
    deleteAt:timestamp("delete_at")
    
  
});