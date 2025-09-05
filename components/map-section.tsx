import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Layers, Filter } from "lucide-react"

export function MapSection() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Issue Density Map</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Layers className="w-4 h-4 mr-2" />
            Layers
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-200">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">Interactive Civic Map</h3>
            <p className="text-sm text-gray-500 mb-4">
              Visualize issue density across different wards and neighborhoods
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
              Load Map Integration
            </Button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">23</div>
            <div className="text-sm text-red-700">High Priority Areas</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">87%</div>
            <div className="text-sm text-green-700">Coverage Rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
