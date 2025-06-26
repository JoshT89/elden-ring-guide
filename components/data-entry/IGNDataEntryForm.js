'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ignWalkthroughStructure } from '@/lib/data/ignWalkthroughData';
import { exportToJSON } from '@/lib/data/importUtils';

const IGNDataEntryForm = () => {
  const [activeTab, setActiveTab] = useState('walkthrough');
  const [formData, setFormData] = useState({});
  const [allData, setAllData] = useState({
    walkthroughSections: [],
    characterQuests: [],
    bossGuides: [],
    collectibles: []
  });

  // Initialize form with IGN structure
  const initializeForm = (type) => {
    let sample = {};
    
    switch (type) {
      case 'walkthrough':
        sample = {
          id: 'section-name',
          title: 'Section Title',
          order: 1,
          type: 'region',
          description: 'Description of the section',
          objectives: ['Objective 1', 'Objective 2'],
          items: ['Item 1', 'Item 2'],
          bosses: ['Boss 1'],
          npcs: ['NPC 1'],
          secrets: ['Secret 1'],
          estimatedTime: '1-2 hours',
          difficulty: 'easy',
          tags: ['tag1', 'tag2']
        };
        break;
      case 'quest':
        sample = {
          id: 'quest-name',
          title: 'Quest Title',
          npc: 'NPC Name',
          description: 'Quest description',
          steps: [
            {
              step: 1,
              location: 'Location',
              requirement: 'Requirement',
              dialogue: 'Dialogue',
              reward: 'Reward'
            }
          ],
          endings: ['Ending 1'],
          relatedQuests: ['Related Quest'],
          tags: ['quest', 'npc']
        };
        break;
      case 'boss':
        sample = {
          id: 'boss-name',
          title: 'Boss Name',
          location: 'Location',
          region: 'Region',
          health: 10000,
          runes: 50000,
          weaknesses: ['Weakness 1'],
          resistances: ['Resistance 1'],
          phases: [
            {
              phase: 1,
              healthThreshold: 100,
              attacks: ['Attack 1'],
              strategies: ['Strategy 1'],
              tips: ['Tip 1']
            }
          ],
          rewards: [
            {
              type: 'weapon',
              name: 'Reward Name',
              description: 'Reward description'
            }
          ],
          summonOptions: ['Summon 1'],
          cheeseStrategies: ['Cheese 1'],
          difficulty: 'medium',
          requiredLevel: 30,
          tags: ['boss', 'region']
        };
        break;
      case 'collectible':
        sample = {
          id: 'collectible-name',
          title: 'Collectible Name',
          type: 'upgrade-material',
          description: 'Description',
          locations: ['Location 1'],
          totalCount: 10,
          tags: ['collectible', 'type']
        };
        break;
    }
    
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
    const dataKey = activeTab === 'walkthrough' ? 'walkthroughSections' : 
                   activeTab === 'quest' ? 'characterQuests' :
                   activeTab === 'boss' ? 'bossGuides' : 'collectibles';
    
    setAllData(prev => ({
      ...prev,
      [dataKey]: [...prev[dataKey], formData]
    }));
    
    initializeForm(activeTab);
    alert('Data saved successfully!');
  };

  // Export all data
  const handleExport = () => {
    exportToJSON(allData, 'elden-ring-ign-data.json');
  };

  // Load IGN sample data
  const loadIGNSample = () => {
    setAllData(ignWalkthroughStructure);
    alert('IGN sample data loaded!');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">IGN Walkthrough Data Entry</h1>
        <div className="space-x-2">
          <Button onClick={loadIGNSample} variant="outline">
            Load IGN Sample
          </Button>
          <Button onClick={handleExport} variant="outline">
            Export All Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Add New IGN-Style Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="walkthrough">Walkthrough</TabsTrigger>
                  <TabsTrigger value="quest">Quest</TabsTrigger>
                  <TabsTrigger value="boss">Boss</TabsTrigger>
                  <TabsTrigger value="collectible">Collectible</TabsTrigger>
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
                <h4 className="font-semibold">Walkthrough Sections: {allData.walkthroughSections.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.walkthroughSections.map((section, index) => (
                    <Badge key={index} variant="secondary">
                      {section.title}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Character Quests: {allData.characterQuests.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.characterQuests.map((quest, index) => (
                    <Badge key={index} variant="secondary">
                      {quest.title}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Boss Guides: {allData.bossGuides.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.bossGuides.map((boss, index) => (
                    <Badge key={index} variant="secondary">
                      {boss.title}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Collectibles: {allData.collectibles.length}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {allData.collectibles.map((collectible, index) => (
                    <Badge key={index} variant="secondary">
                      {collectible.title}
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

export default IGNDataEntryForm; 