import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MoreHorizontal, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data for the table
const userData = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    orders: 45,
    revenue: "$12,450"
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "2024-01-14",
    orders: 32,
    revenue: "$8,920"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2024-01-10",
    orders: 18,
    revenue: "$4,560"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "2024-01-15",
    orders: 67,
    revenue: "$18,750"
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "User",
    status: "Pending",
    lastLogin: "2024-01-12",
    orders: 23,
    revenue: "$6,890"
  },
  {
    id: "6",
    name: "Lisa Garcia",
    email: "lisa.garcia@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    orders: 89,
    revenue: "$25,670"
  },
  {
    id: "7",
    name: "Tom Anderson",
    email: "tom.anderson@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-13",
    orders: 12,
    revenue: "$3,240"
  },
  {
    id: "8",
    name: "Rachel Brown",
    email: "rachel.brown@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "2024-01-14",
    orders: 56,
    revenue: "$15,320"
  }
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Active":
      return "default";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "outline";
    default:
      return "secondary";
  }
};

const getRoleColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-destructive/10 text-destructive";
    case "Manager":
      return "bg-warning/10 text-warning";
    case "User":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = userData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>User Management</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-8 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>Add User</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Orders</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-sm text-muted-foreground">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.orders}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.revenue}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="cursor-pointer">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Phone className="mr-2 h-4 w-4" />
                          Call User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredData.length} of {userData.length} users
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}