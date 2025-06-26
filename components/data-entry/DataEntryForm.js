'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { generateSampleEntry, exportToJSON } from '@/lib/data/importUtils';

const DataEntryForm = () => {
  const [activeTab, setActiveTab] = useState('boss');
  const [formData, setFormData] = useState({});
  const [allData, setAllData] = useState({
    bosses: [],
    npcs: [],
    locations: [],
    equipment: []
  });

  // Initialize form with sample data
  const initializeForm = (type) => {
    const sample = generateSampleEntry(type);
    setFormData(sample);
  };

  // Handle form field changes
  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle array field changes
  const handleArrayFieldChange = (field, value) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: array
    }));
  };

  // Save data
  const handleSave = () => {
    setAllData(prev => ({
      ...prev,
      [activeTab + 's']: [...prev[activeTab + 's'], formData]
    }));
    
    initializeForm(activeTab);
    alert('Data saved successfully!');
  };

  // Export all data
  const handleExport = () => {
    exportToJSON(allData, 'elden-ring-guide-data.json');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Elden Ring Guide Data Entry</h1>
        <Button onClick={handleExport} variant="outline">
          Export All Data
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Add New Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="boss">Boss</TabsTrigger>
                  <TabsTrigger value="npc">NPC</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="equipment">Equipment</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold capitalize">{activeTab} Entry</h3>
                    <Button onClick={() => initializeForm(activeTab)} variant="outline">
                      Reset Form
                    </Button>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="id">ID</Label>
                        <Input
                          id="id"
                          value={formData.id || ''}
                          onChange={(e) => handleFieldChange('id', e.target.value)}
                          placeholder="unique-id"
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={formData.title || ''}
                          onChange={(e) => handleFieldChange('title', e.target.value)}
                          placeholder="Display title"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description || ''}
                        onChange={(e) => handleFieldChange('description', e.target.value)}
                        placeholder="Detailed description"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={formData.tags ? formData.tags.join(', ') : ''}
                        onChange={(e) => handleArrayFieldChange('tags', e.target.value)}
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                    
                    <Button type="button" onClick={handleSave} className="w-full">
                      Save Entry
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Data Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Bosses: {allData.bosses.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.bosses.map((boss, index) => (
                    <Badge key={index} variant="secondary">
                      {boss.title}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">NPCs: {allData.npcs.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.npcs.map((npc, index) => (
                    <Badge key={index} variant="secondary">
                      {npc.name}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Locations: {allData.locations.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.locations.map((location, index) => (
                    <Badge key={index} variant="secondary">
                      {location.name}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Equipment: {allData.equipment.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.equipment.map((item, index) => (
                    <Badge key={index} variant="secondary">
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataEntryForm; 