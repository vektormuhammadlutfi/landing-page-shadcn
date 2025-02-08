'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, ArrowRight, AlertCircle, Package, Clock, Shield, 
  MapPin, Phone, Mail, Facebook, Linkedin, ChevronRight,
  CreditCard, Building, CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                1300 555 450
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@airroaddirect.com.au
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="w-4 h-4 cursor-pointer" />
              <Linkedin className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-red-600">AirRoad Direct</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                Home
                <Badge className="ml-2 bg-red-600">New</Badge>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Coverage</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
            </nav>
            <div className="flex space-x-4">
              <Button variant="outline">Track Shipment</Button>
              <Button variant="default" className="bg-red-600 hover:bg-red-700">Sign In/Register</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">Express Freight Delivery Across Australia</h1>
                <p className="text-xl mb-8">Fast, reliable, and secure freight forwarding services for businesses of all sizes.</p>
                <div className="flex space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
                  <Button variant="outline" className="border-white hover:bg-white hover:text-gray-900 text-black">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-lg border-0">
                  <CardContent className="p-6">
                    <Tabs defaultValue="quote" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="quote">Get Quote</TabsTrigger>
                        <TabsTrigger value="track">Track Order</TabsTrigger>
                      </TabsList>
                      <TabsContent value="quote">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-200">From</label>
                              <Input placeholder="Suburb or Postcode" className="mt-1 bg-white/80" />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-200">To</label>
                              <Input placeholder="Suburb or Postcode" className="mt-1 bg-white/80" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-200">Quantity</label>
                              <Input type="number" placeholder="QTY" className="mt-1 bg-white/80" />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-200">Type</label>
                              <Select>
                                <SelectTrigger className="mt-1 bg-white/80">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pallet">Pallet</SelectItem>
                                  <SelectItem value="carton">Carton</SelectItem>
                                  <SelectItem value="skid">Skid</SelectItem>
                                  <SelectItem value="crate">Crate</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-200">Dimensions</label>
                              <Select>
                                <SelectTrigger className="mt-1 bg-white/80">
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="standard">Standard</SelectItem>
                                  <SelectItem value="custom">Custom</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-200">Weight (kg)</label>
                              <Input type="number" placeholder="Weight" className="mt-1 bg-white/80" />
                            </div>
                          </div>

                          <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
                            Calculate Price
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="track">
                        <div className="space-y-4">
                          <Input placeholder="Enter tracking number" className="bg-white/80" />
                          <Button className="w-full bg-red-600 hover:bg-red-700">
                            Track Shipment
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose AirRoad Direct?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide reliable and efficient freight forwarding services across Australia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
                  <p className="text-gray-600">
                    Same-day and next-day delivery options available for urgent shipments
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-semibold mb-2">Secure Transport</h3>
                  <p className="text-gray-600">
                    Full insurance coverage and real-time tracking for peace of mind
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                  <p className="text-gray-600">
                    Extensive network covering all major cities and regional areas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pallet Delivery</h3>
                      <p className="text-gray-600">
                        Efficient handling and transport of palletized goods with specialized equipment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Warehouse Solutions</h3>
                      <p className="text-gray-600">
                        Short-term storage and distribution services available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Payment</h3>
                      <p className="text-gray-600">
                        Multiple payment options and credit terms for regular customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Coverage</h3>
                  <div className="space-y-3">
                    {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'].map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>{city} Metropolitan Area</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>8:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>After Hours Service</span>
                        <span>Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Updates</h2>
              <Button variant="outline">View All News</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  date: '22 Jan 2024',
                  title: 'Service Disruption in Darwin',
                  description: 'Temporary service adjustments due to weather conditions'
                },
                {
                  date: '15 Jan 2024',
                  title: 'New Melbourne Facility',
                  description: 'Expanding our operations with a new distribution center'
                },
                {
                  date: '13 Dec 2023',
                  title: 'Delays in Far North QLD',
                  description: 'Weather-related delays affecting delivery times'
                }
              ].map((news, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.description}</p>
                    <Button variant="link" className="text-red-600 p-0">
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Truck className="w-8 h-8" />
                <span className="text-xl font-bold">AirRoad Direct</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in freight forwarding across Australia.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Coverage</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Track Shipment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1300 555 450</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@airroaddirect.com.au</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Sydney, Australia</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700" />
                <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AirRoad Direct. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}